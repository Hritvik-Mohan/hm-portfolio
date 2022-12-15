import './Header.css'

export default function Header() {
  return (
    <div className="Header">
      <div className="name">
        <h3>Hi, I'm Hritvik</h3>
        <p>Frontend Developer</p>
      </div>
      <div className="links">
        <div className='icons'>
          <div>
            <a href="https://github.com/Hritvik-Mohan"><i class="bi bi-github"></i></a>
          </div>
          <div>
            <a href="https://twitter.com/hritvik_io"><i class="bi bi-twitter"></i></a>
          </div>
          <div>
            <a href="https://www.behance.net/hritvikmohan"><i class="bi bi-behance"></i></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/hritvik-mohan-33162b131/"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className='resume'>
          <a href='https://drive.google.com/file/d/1iESBFnq9iyW9pYGjIMImAQ7Dql8Dodip/view?usp=sharing'>Resume</a>
        </div>
      </div>
    </div>
  )
}
