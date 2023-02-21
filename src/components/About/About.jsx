import './About.css'
import Education from '../Education/Education'

function About() {
  return (
    <div className='about'>
      <div className='bio-img-text-container'>
        <img className='bio-img' src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" />
        <div className='bio-container'>
            <h2 className='bio-heading'>Hi, I'm Hritvik Mohan.</h2>
            {/* <div className='bio-hr'></div> */}
            <p>Welcome to my online home. I'm a <span className='active-tab'>frontend developer</span> and a recent Bachelor of Computer Application grad, 2022, based in Varanasi. I have a strong passion for web development with a knack for design. </p>
            <p>I have experience with various frontend development technologies, including ReactJS, JavaScript, HTML/CSS, and more.</p>
        </div>
      </div>
      {/* <div className=''>
        <h2 className='tabs-heading'>Education</h2>
        <Education />
      </div> */}
    </div>
  )
}

export default About