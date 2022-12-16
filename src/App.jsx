import './App.css'
import Header from './components/Header'
import data from "./data.json"
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {

  const projectElement = data.map(project => {
    return (
      <div>
        <ProjectCard className="project-card" project={project}/>
      </div>
    )
  })

  return (
    <div className="App">
      <Header />
      <section>
      <h2>Projects</h2>
        {projectElement}
      </section>
    </div>
  )
}

export default App
