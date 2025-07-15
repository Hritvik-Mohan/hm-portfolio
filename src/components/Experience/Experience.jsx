import "./Experience.css";

function Experience() {
  return (
    <div className="edu">
      <h2 className="tabs-heading">Experience</h2>

      <div>
        <h2 className="edu-title">Newton School</h2>
        <p className="edu-institute">SDE | Technical Program Manager</p>
        <p className="edu-uni">Academics – Full Stack Development</p>
        <p className="edu-duration">2022 – Present</p>

        <ul className="edu-list">
          <li>
            Built a <strong>robust CI/CD pipeline</strong> using Docker, GitHub
            Actions, NGINX, and AWS (EC2, ECR, CodeBuild) for internal platforms
            and student projects.
          </li>
          <li>
            Contributed to the architecture and backend development of{" "}
            <strong>Zuvees</strong>, a project leveraging Shopify’s composable
            architecture.
          </li>
          <li>
            Improved <strong>container resilience</strong> on AWS by
            implementing health checks, restart policies, and error handling.
          </li>
          <li>
            Acted as a <strong>code reviewer</strong> for two production-grade
            projects, ensuring performance, quality, and architectural
            soundness.
          </li>
          <li>
            Authored detailed <strong>technical documents</strong> – system
            design, API docs, deployment guides, and developer handbooks – for
            smooth onboarding and maintainability.
          </li>
          <li>
            Led a 6-member team to build a <strong>web scraping app</strong> (in
            collaboration with IIT Roorkee) that aggregates data on government
            schemes, jobs, and scholarships using Next.js, Django, Puppeteer,
            Docker, and AWS.
          </li>
          <li>
            Developed <strong>NS Trinity</strong>, an AI-powered React Native
            app for educators to track and manage student queries via text and
            audio.
          </li>
          <li>
            Built <strong>block-based learning tools and games</strong> using
            Editor.js, Blockly, and Next.js to power interactive academic
            content.
          </li>
          <li>
            Created 200+ JavaScript/ReactJS challenges, reviewed 500+ MCQs,
            wrote 60+ technical resources, and conducted 76 technical
            interviews.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="edu-title">Wasty Site (Early-stage Startup)</h2>
        <p className="edu-institute">Backend Development Intern</p>
        <p className="edu-uni">Varanasi, India</p>
        <p className="edu-duration">Feb 2022 – Mar 2022</p>

        <p className="edu-company-desc">
          <em>
            A social-impact startup aiming to modernize waste collection and
            disposal in Tier 2 cities of India by creating a digital platform
            that bridges the gap between local collectors and households,
            promoting sustainability and efficient logistics.
          </em>
        </p>

        <ul className="edu-list">
          <li>
            Contributed to the development of an MVP for a waste management
            platform that connected local waste collectors with households and
            small businesses.
          </li>
          <li>
            Designed and implemented core backend APIs using{" "}
            <strong>Node.js</strong> and <strong>Express</strong>, enabling user
            registration, role-based access, and request tracking.
          </li>
          <li>
            Integrated <strong>Google OAuth</strong> for seamless user
            authentication and created paginated endpoints for efficient data
            loading on the dashboard.
          </li>
          <li>
            Collaborated with frontend developers to design API contracts and
            ensure consistent data flow across the application.
          </li>
          <li>
            Documented key endpoints and workflows using{" "}
            <strong>Postman</strong> and OpenAPI for future handoff and
            scalability.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
