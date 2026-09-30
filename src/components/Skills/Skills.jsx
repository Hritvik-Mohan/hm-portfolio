import './Skills.css'

const categorizedSkills = {
  languages: [
    'TypeScript', 'JavaScript', 'Node.js', 'Java', 'C++', 'SQL'
  ],
  frontend: [
    'React', 'Next.js', 'React Native', 'Electron'
  ],
  backend: [
    'Microservices', 'REST APIs', 'WebSockets', 'Express',
    'Django REST Framework', 'PostgreSQL', 'MongoDB', 'Prisma'
  ],
  cloud: [
    'AWS (EC2, ECR, CodeBuild)', 'Docker', 'NGINX', 'CI/CD', 'GitHub Actions', 'Git', 'VPCs & Subnets'
  ],
  testing: [
    'Cypress', 'Distributed Tracing', 'Latency Percentiles (HdrHistogram)'
  ],
  concepts: [
    'Distributed Systems', 'Fault Tolerance', 'Load Balancing', 'Consistent Hashing',
    'Rate Limiting', 'Queueing Theory', 'System Design', 'Technical Documentation', 'Interviewing'
  ]
}

const categoryLabels = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend & Distributed Systems',
  cloud: 'Cloud & DevOps',
  testing: 'Testing & Observability',
  concepts: 'Concepts & Practices'
}

function Skills() {
  return (
    <div className='skills' id='skills'>
      <h2 className='tabs-heading'>Skills</h2>
      <div className="skill-groups">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div className="skill-group" key={category}>
            <h3 className="skill-group-label">{categoryLabels[category]}</h3>
            <div className="skills-container">
              {skills.map((skill) => (
                <span key={skill} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
