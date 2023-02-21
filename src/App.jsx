import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Education from './components/Education/Education'
import Home from './components/Home'
import Projects from './components//Projects/Projects'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
      <section className='main-section'>
        <h2 className='tabs'>
          {/* <span>All</span> */}
          <NavLink className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/">Home</NavLink>
          {/* <Link to="/about">About</Link> */}
          <NavLink className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/projects">Portfolio</NavLink>
          {/* <Link to="/blogs">Blogs</Link> */}
          {/* <span>UI UX</span> */}
          {/* <NavLink className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/education">Education</NavLink> */}
          {/* <Link to="/experience">Experience</Link> */}
        </h2>
      </section>
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/' element={<About />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
