import "./Experience.css";

function Experience() {
  return (
    <div className="edu" id="experience">
      <h2 className="tabs-heading">Experience</h2>

      <div>
        <h2 className="edu-title">Newton School</h2>
        <p className="edu-institute">Software Development Engineer (SDE 1)</p>
        <p className="edu-uni">Bengaluru, India</p>
        <p className="edu-duration">Mar 2025 – Present</p>

        <ul className="edu-list">
          <li>
            I'm the main engineer behind an internal system design simulator
            (built with <strong>Electron and TypeScript</strong>) - you draw
            out an architecture, hit run, and it simulates real traffic through
            it so you can catch bottlenecks and failures before production
            does. I built the core engine myself: the event loop, request
            routing, and the pipeline that tracks metrics and traces.
          </li>
          <li>
            I implemented several real-world load-balancing strategies -
            least response time, consistent hashing, header-based routing -
            so the simulator reflects how production traffic is actually handled.
          </li>
          <li>
            I modeled fault tolerance in depth: different ways a service can
            fail, an automatic detector for single points of failure, and
            rate limiting to keep the system stable under load.
          </li>
          <li>
            I built the observability layer - latency tracking, cache
            performance, distributed tracing - and verified the numbers held
            up against known queueing-theory results.
          </li>
          <li>
            To keep the simulator fast at very high traffic volumes, I wrote a
            native C++ addon and used low-level techniques like shared memory
            buffers and worker-side batching.
          </li>
          <li>
            I've written 200+ technical specs and design docs that shaped how
            the product was built, on top of making our Dockerized AWS
            services self-healing and building out their CI/CD pipelines.
          </li>
          <li>
            I led a 6-person team building a data-aggregation platform in
            partnership with <strong>IIT Roorkee</strong>.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="edu-title">Newton School</h2>
        <p className="edu-institute">Technical Program Manager</p>
        <p className="edu-uni">Bengaluru, India</p>
        <p className="edu-duration">Mar 2023 – Mar 2025</p>

        <ul className="edu-list">
          <li>
            I built <strong>NS Trinity</strong>, an AI-assisted app that helps
            teachers track and manage student questions from text and audio.
          </li>
          <li>
            I reviewed code on two production projects and helped shape the
            architecture of <strong>Zuvees</strong>, a Shopify-based platform.
          </li>
          <li>
            I ran 76 technical interviews, and created 200+ coding problems
            and reviewed 500+ assessment questions used in hiring.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="edu-title">Wasty Site (Early-stage Startup)</h2>
        <p className="edu-institute">Full Stack Developer (Volunteer)</p>
        <p className="edu-uni">Varanasi, India</p>
        <p className="edu-duration">Feb 2022 – Mar 2022</p>

        <p className="edu-company-desc">
          <em>
            A social-impact startup aiming to modernize waste collection and
            disposal in Tier 2 cities of India by connecting local collectors
            with households and businesses.
          </em>
        </p>

        <ul className="edu-list">
          <li>
            I built the Node.js backend for the app's first prototype,
            including pagination and Google sign-in.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
