import './About.css'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'

function About() {
  return (
    <div className='about'>
      <div className='bio-img-text-container'>
        <img className='bio-img' src="https://avatars.githubusercontent.com/u/25386810?v=4" alt="Hritvik Mohan" />
        <div className='bio-container'>
          <h2 className='bio-heading'>Hi, I'm Hritvik Mohan.</h2>
          <p>
            I’m a <span className='active-tab'>full-stack developer</span> with a strong foundation in computer science — currently pursuing my Master of Computer Application (2025–2026) at VIT and holding a Bachelor's degree in Computer Application (2019–2022) from SMS Varanasi.
          </p>
          <p>
            My experience spans <strong>frontend, backend, DevOps, and system architecture</strong>. I enjoy building robust, scalable, and developer-friendly systems that solve real-world problems. From crafting intuitive UIs to deploying resilient cloud-based infrastructure, I thrive at the intersection of engineering and impact.
          </p>
          <p>
            I’ve worked on projects such as <strong>Zuvees</strong> — a Shopify-based platform where I led CI/CD and backend architecture — and a large-scale scraping tool built in collaboration with <strong>IIT Roorkee</strong>. I’ve also developed AI-powered mobile apps, content editors, and internal tooling that enhance developer workflows and user experiences.
          </p>
          <p>
            I value <strong>clarity, maintainability, and thoughtful collaboration</strong>. I regularly contribute to technical documentation, conduct code reviews, and lead by example when it comes to clean code and scalable system design.
          </p>
          <p>
            Outside of work, I love designing tools that simplify workflows, exploring system design patterns, and engaging with ideas that make software more humane and useful.
          </p>
        </div>
      </div>
      <div>
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  )
}

export default About
