import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <>
    <div className="Header">
      <div className="name">
        {/* <img src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" srcset="" /> */}
        <div className='logo-container'>
          {/* <h3>Hritvik Mohan</h3> */}
          <Link to="/"><h3 className='logo'>hritvik</h3></Link>
          {/* <h3>Hi, I'm Hritvik<span className='emoji'>🥤</span></h3> */}
          {/* <p>Frontend Developer</p> */}
        </div>
      </div>
      <div className="links">
        <div className='icons'>
          <div>
            <button className='theme-toggle' onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              <i className={theme === 'dark' ? 'bi bi-brightness-high-fill' : 'bi bi-moon-stars-fill'}></i>
            </button>
          </div>
          <div>
            <a href="https://github.com/Hritvik-Mohan" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          </div>
          <div>
            <a href="https://twitter.com/hritvik_io" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
          </div>
          <div>
            <a href="https://www.behance.net/hritvikmohan" target="_blank" rel="noopener noreferrer"><i className="bi bi-behance"></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/hritvik-mohan-33162b131/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className='resume'>
          <a href="https://drive.google.com/file/d/1cPv4RvGr71OFSQ6SY8k0Zr3hJ8BXPVvZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume.pdf</a>
        </div>
      </div>
    </div>
    </>
  )
}
