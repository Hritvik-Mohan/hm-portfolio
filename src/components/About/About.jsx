import './About.css'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'

function About() {
  return (
    <div className='about'>
      <div className='bio-img-text-container'>
        <img className='bio-img' src="https://avatars.githubusercontent.com/u/25386810?v=4" alt="" />
        <div className='bio-container'>
            <h2 className='bio-heading'>Hi, I'm Hritvik Mohan.</h2>
            {/* <div className='bio-hr'></div> */}
            <p>Welcome to my online home. I'm a <span className='active-tab'>frontend developer</span> and a recent Bachelor of Computer Application grad, 2022, based in Bangalore. I have a strong passion for web development with a knack for <a href='https://www.behance.net/gallery/148350933/Auction-App' target="_blank" className='link'>design</a>. </p>
            <p>I have experience with various frontend development technologies, including ReactJS, JavaScript, HTML/CSS, and more.</p>
        </div>
      </div>
      <div className=''>
        <Skills />
        <Education />
        <Experience/>
      </div>
    </div>
  )
}

export default About