import './About.css'
import Education from '../Education/Education'

function About() {
  return (
    <div className='about'>
      <div className='bio-container'>
        <div className='bio-img-head-wrapper'>
          <img className='bio-img' src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" />
          <h2 className='bio-heading'>Hi, I'm Hritvik Mohan.</h2>
        </div>
          <p>Welcome to my online home. I'm a Frontend Developer and a recent Bachelor of Computer Application grad, 2022. I have a strong passion for web development with a knack for design. </p>
          <p>I have experience with various front-end development technologies, including ReactJS, JavaScript, and HTML/CSS. </p>
      </div>
      {/* <Education /> */}
    </div>
  )
}

export default About