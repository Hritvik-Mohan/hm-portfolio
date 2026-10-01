import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import NotesList from './components/Notes/NotesList'

const NotePage = lazy(() => import('./components/Notes/NotePage'))

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <section className='main-section'>
        <h2 className='tabs'>
          <NavLink end className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/">Notes</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/about">About</NavLink>
          {/* Projects tab hidden until the showcased projects are replaced */}
          {/* <NavLink className={({ isActive }) => (isActive ? 'active-tab ' : 'tab')} to="/projects">Projects</NavLink> */}
        </h2>
      </section>
      <Suspense fallback={null}>
        <Routes>
          <Route exact path='/' element={<NotesList />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/notes' element={<Navigate to='/' replace />} />
          <Route path='/notes/:slug' element={<NotePage />} />
        </Routes>
      </Suspense>
      </Router>
    </div>
  )
}

export default App
