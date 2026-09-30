import './About.css'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'

function About() {
  return (
    <div className='about'>
      <div className='bio-img-text-container'>
        <img className='bio-img' src="/avatar.jpg" alt="Hritvik Mohan" />
        <div className='bio-container'>
          <h2 className='bio-heading'>Hi, I'm Hritvik Mohan.</h2>
          <p>
            I'm a <span className='active-tab'>software engineer</span> based in Bengaluru, and I've spent the last few years building backend systems in Node.js and TypeScript, and running them on AWS. Right now I'm an SDE 1 at Newton School, and I'm also finishing up a Master's in Computer Applications at VIT (2025–2027), after a Bachelor's in Computer Applications from SMS Varanasi.
          </p>
          <p>
            My main project these days is one I actually enjoy explaining: a system design simulator, built with Electron and TypeScript, where you drag out an architecture on a canvas - API servers, load balancers, databases, caches - connect them together, and hit run. It then simulates real traffic flowing through that system, so you can watch it bottleneck, fail, and recover before any of it touches production. I built the engine underneath it myself: the event loop, request routing and load balancing, and a metrics pipeline that tracks latency and cache performance the way a real system would.
          </p>
          <p>
            Before that, I worked as a Technical Program Manager, where I built <strong>NS Trinity</strong>, an AI-assisted app that helps teachers keep track of student questions, and spent a lot of time on the technical side of hiring - writing coding problems and running interviews for new engineers.
          </p>
          <p>
            Alongside the actual building, I write a lot - design docs, technical specs, code review notes - because I think explaining a system well matters almost as much as building it. And when I'm not doing either of those, I'm usually making something small just to understand how it works: a multiplayer card game, a flashcard app, an online code editor. Most of it ends up on my <a href="https://github.com/Hritvik-Mohan" target="_blank" rel="noopener noreferrer">GitHub</a>, along with whatever I'm currently tinkering with.
          </p>
        </div>
      </div>
      <nav className='section-nav'>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#education'>Education</a>
      </nav>
      <div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  )
}

export default About
