import './Skills.css'

const categorizedSkills = {
  frontend: ['ReactJS', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Tailwind CSS', 'Editor.js', 'Blockly'],
  backend: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'Google OAuth'],
  devops: ['Docker', 'NGINX', 'GitHub Actions', 'AWS EC2', 'AWS ECR', 'AWS CodeBuild'],
  tools: ['Git', 'GitHub', 'Postman', 'OpenAPI', 'Figma'],
  others: ['Technical Documentation', 'System Design', 'Code Reviews', 'Interviewing']
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
