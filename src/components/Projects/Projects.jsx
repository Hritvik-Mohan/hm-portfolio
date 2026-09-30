import data from "../../data.json"
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

export default function Projects() {
    const projectElement = data.map(project => {
        return (
          <div key={project.title}>
            <ProjectCard className="project-card" project={project}/>
          </div>
        )
      })
  return (
    <div className='projects'>{projectElement}</div>
  )
}
