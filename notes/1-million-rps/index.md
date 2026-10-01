---
title: >-
  Engineering for One Million Requests per Second: Overcoming CPU, Network, and
  Database Bottlenecks
date: '2026-10-01'
tags:
  - test
  - system design
  - system architecture
source: notion
notion_id: 3ecddcdb-7cac-8095-9544-c732d6e325a0
---
### 1. Executive Summary: The Anatomy of Extreme Scale


The "1 Million Requests per Second" (RPS) milestone represents a critical engineering frontier where infrastructure ceases to be a background utility and becomes a high-stakes arena of systems optimization. At this magnitude, the margin for error is effectively zero. Handling over 1 million HTTP requests per second on a single server is a feat of engineering comparable to the operational requirements of global entities like Uber, Netflix, and the AWS Identity and Access Management (IAM) service—which handles hundreds of millions of requests per second globally.


Achieving this scale requires a fundamental departure from standard development mentalities. The "good enough" approach—where horizontal scaling is often treated as a panacea for poor performance—collapses under these conditions. At extreme scale, minor algorithmic inefficiencies, such as opting for an O(N) operation over O(\log N), do not merely result in latency; they trigger total system failure or catastrophic cloud expenditures. When every millisecond of CPU time translates to thousands of dollars in ingress/egress overhead, the architect must transition from high-level application development to low-level systems engineering. This document details the hardware provisioning, runtime migrations, and memory-first storage strategies required to sustain this unprecedented throughput.


### 2. Infrastructure Architecture: Provisioning for the 600 Gbps Frontier


Processing terabytes of data per minute demands specialized hardware that exceeds the capabilities of standard cloud instances. Standard virtual machines lack the network density and CPU throughput required to prevent the infrastructure itself from becoming the primary bottleneck before a single line of application code is executed.


The Target Server: "The Beast"


To serve as the primary endpoint, the **AWS EC2** `c8gn.48xlarge` instance was selected. This machine is built for network-intensive workloads, featuring:

- **CPU:** 192 Physical Cores
- **RAM:** 384 GB
- **Network Capacity:** 600 Gb/s (75 GB/s)
- **Operational Cost:** $11/hour (approximately $8,300/month)

The Distributed Tester Fleet


Saturating a 600 Gbps pipe requires a massive, coordinated load from a client-side fleet. A single tester cannot generate the necessary egress; therefore, we deployed a fleet of **60** `c8gn.2xlarge` instances (8 cores/16 GB RAM each). While the theoretical monthly cost for this fleet is approximately 20,000 (28.44/hour), our total research expenditure was managed down to approximately **$2,000** by utilizing short-duration, high-intensity test windows.


Orchestration and Data Harvesting


Coordinating 60 independent testers to synchronize a unified wall of traffic is an exercise in millisecond-perfect timing:

- **Traffic Coordination:** We utilized `autocannon` orchestrated via **AWS Systems Manager (SSM)**. By setting "max concurrency 100%," we ensured that all 60 testers initiated their traffic generation simultaneously, preventing staggered loads that would fail to stress the server's peak capacity.
- **The Logging Pipeline:** To avoid local disk I/O bottlenecks during the test, logs were streamed to **Amazon S3**. Post-test analysis utilized custom **bash** and **awk** scripts to concatenate millions of data points into high-fidelity performance reports.

Once the physical capacity of the 600 Gbps frontier was validated, the focus shifted to minimizing context switching and runtime overhead within the software layer.


### 3. Software Evolution: Bypassing the Runtime Bottleneck


At 1 million RPS, the overhead of high-level language runtimes—garbage collection, single-threaded event loops, and internal distribution logic—becomes an insurmountable barrier.


The Failure of Traditional Runtimes


While Node.js is remarkably efficient for trivial I/O—successfully handling **6 million RPS** for simple string responses on our hardware—it hit a definitive wall when faced with "Real World" payloads. For a `/patch` route involving a 30 KB payload and basic CPU-intensive operations, Node.js and Express collapsed. Even with clustering, we hit a **single-threaded event loop saturation** point. In Node's cluster mode, the parent process responsible for distributing traffic to the 128 workers became the primary architectural bottleneck; it simply could not hand off 30 KB packets fast enough to keep the workers utilized.


The Migration to C++ and Drogon


To eliminate this distribution overhead, the system was migrated to the **C++ Drogon** framework. Moving to a compiled, multi-threaded architecture allowed us to eliminate the parent-process bottleneck and utilize every core for both ingress and processing.


Critical Performance Tuning

- **JSON Serialization:** Standard JSON parsers proved too slow for million-RPS throughput. We integrated **Rapid JSON**, significantly reducing the serialization time per request.
- **Cycle Conservation:** We made the strategic decision to disable server-side logging and response compression. While compression saves bandwidth, at this scale the CPU cost of compressing 30 KB per request outweighed the network savings. Every reclaimed CPU cycle was dedicated to request handling.

This optimization moved the bottleneck from the CPU and runtime layer to the storage layer, necessitating a move beyond traditional disk-bound databases.


### 4. Storage Architecture: Bypassing the I/O Wall


Traditional Relational Database Management Systems (RDBMS) are designed for ACID compliance and complex queries, not for the raw write-pressure of 1 million operations per second.


The PostgreSQL Performance Ceiling


Initial testing on a high-spec **AWS RDS instance** (64 cores, 256 GB RAM) demonstrated the physical limits of disk I/O. The database bottlenecked between **35,000 and 50,000 RPS** due to IOPS constraints. In a telling example of diminishing returns, doubling the storage performance added **$1,000/month** to the bill but only increased throughput from 30,000 to 66,000 RPS. The cost-to-performance ratio for scaling traditional disk I/O is unsustainable at this magnitude.


The Memory-First Paradigm


To survive 1M RPS, we implemented a **Redis-based in-memory ingest queue**. This decoupled the synchronous I/O blocking of the request handler from the slower process of disk persistence. A background process then batched these records into PostgreSQL, allowing the system to handle the massive traffic spike in RAM while syncing to the persistent layer at a manageable velocity.


Redis Clustering Strategy


Because a single Redis instance is single-threaded and caps at approximately 200,000 RPS, we deployed a **30-instance Redis Cluster** (15 master nodes for writes, 15 replicas) running directly in the server's RAM. This distributed the write-pressure across the entire 384 GB memory space, bypassing the throughput limits of any single process.


Entropy and ID Generation


Standard sequential ID generation requires **centralized sequence locks**, which introduce unacceptable latency at scale. We bypassed this by using **122-bit random UUIDs** (`crypto.randomUUID`). Using **Birthday Paradox** mathematics, we calculated that at a sustained 1M RPS, it would take **86,000 years** to reach a 50% probability of a single collision. This allowed for decentralized, lock-free ID generation, ensuring linear scaling across all CPU cores.


### 5. Experimental Validation: Analyzing the 2 Billion Request Stress Test


The final validation involved a sustained 30-minute stress test. High-performance systems of this nature often require a "warm-up" period for connection pooling and cache warming to stabilize before reaching peak throughput.


Quantitative Throughput Results


The final metrics for the 30-minute run were:

- **Total Volume:** 2,074,672,000 requests handled.
- **Average RPS:** Sustained >1 Million (Peaking at **1.2 Million**).
- **Data Velocity:** 67.81 Terabytes transferred.
- **Network Throughput:** 38 GB/s (300 Gbps).

Reliability and Stability Analysis


The architecture demonstrated near-perfect stability. Out of over **2 billion requests**, the system recorded only **40 timeouts**. This validates that the bottlenecks were successfully moved to the physical limits of the 600 Gbps network card rather than the software or storage logic.


Competitive Comparison


To contextualize the data velocity of **38 GB/s**, this throughput is approximately **eight times faster** than the peak read speeds of a high-end Mac Studio SSD (approx. 5 GB/s). The server was effectively ingesting and serving data faster than most modern workstations can read from their own local NVMe storage.


### Final Synthesis


Handling 1 million RPS on a single server is an achievement rooted in three core principles: **Hardware Density** (utilizing the 600 Gbps tier), **Runtime Efficiency** (C++ and Drogon to bypass single-threaded parent-process bottlenecks), and **Memory-First Storage** (Redis Clustering and decentralized UUIDs to eliminate centralized sequence locks). By optimizing for the physical limits of the hardware and ruthlessly eliminating runtime overhead, we have proven that extreme-scale traffic is manageable through precise architectural engineering.
