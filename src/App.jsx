import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import data from "./data.json"
import ProjectCard from './components/ProjectCard'
import About from './components/About'
import Education from './components/Education'
import Home from './components/Home'

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
      <Router>
      <section className='main-section'>
        <h2 className='tabs'>
          {/* <span>All</span> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          {/* <span>UI UX</span> */}
          <Link to="/education">Education</Link>
          <Link to="/experience">Experience</Link>
        </h2>
      </section>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/education' element={<Education />} />
      <Route className="projects" path='/projects' element={projectElement} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
