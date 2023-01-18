import './Header.css'

export default function Header() {
  return (
    <>
    <div className="Header">
      <div className="name">
        <img src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" srcset="" />
        <div className=''>
          <h3>Hi, I'm Hritvik<span className='emoji'>🥤</span></h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className="links">
        <div className='icons'>
          <div className='profile-icon'>
            <img className='profile-mod' src="https://pbs.twimg.com/profile_images/1564180600382054400/pQOmGGFo_400x400.jpg" alt="" srcset="" />
          </div>
          <div>
            <a href="https://github.com/Hritvik-Mohan" target="_blank"><i class="bi bi-github"></i></a>
          </div>
          <div>
            <a href="https://twitter.com/hritvik_io" target="_blank"><i class="bi bi-twitter"></i></a>
          </div>
          <div>
            <a href="https://www.behance.net/hritvikmohan" target="_blank"><i class="bi bi-behance"></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/hritvik-mohan-33162b131/" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className='resume'>
          <a href='https://drive.google.com/file/d/1H-3U0OWmvIwAfJRYK10pkj5Un-tFX8wA/view?usp=sharing' target="_blank">Resume</a>
        </div>
      </div>
    </div>
    </>
  )
}
