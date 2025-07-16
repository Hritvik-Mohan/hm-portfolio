import './Skills.css'

const categorizedSkills = {
  programmingLanguages: [
    'JavaScript', 'TypeScript', 'NodeJS', 'Java', 'SQL', 'HTML', 'CSS'
  ],
  frontend: [
    'ReactJS', 'Next.js', 'ReactNative', 'Expo', 'JavaScript', 'HTML', 'CSS',
    'Responsive Design', 'Tailwind CSS', 'Bootstrap', 'Editor.js', 'Blockly'
  ],
  backend: [
    'Node.js', 'Express.js', 'Django', 'REST APIs', 'Google OAuth',
    'WebSockets', 'PrismaORM', 'PostgreSQL'
  ],
  devops: [
    'Docker', 'NGINX', 'GitHub Actions', 'AWS EC2', 'AWS ECR', 'AWS CodeBuild', 'AWS'
  ],
  tools: [
    'Git', 'GitHub', 'Postman', 'OpenAPI', 'Figma', 'Liquid', 'Cypress'
  ],
  others: [
    'Technical Documentation', 'System Design', 'Code Reviews', 
    'Interviewing', 'Technical Writing', 'Project Management', 'Research'
  ]
}

function Skills() {
  return (
    <div className='skills'>
      <h2 className='tabs-heading'>Skills</h2>
      <div className="skills-container">
        {Object.entries(categorizedSkills).map(([category, skills]) =>
          skills.map((skill) => (
            <span key={skill} className={`skill ${category}`}>
              {skill}
            </span>
          ))
        )}
      </div>
    </div>
  )
}

export default Skills
