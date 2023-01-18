import './ProjectCard.css'

export default function ProjectCard(props) {
    console.log(props)

    return (
        // < href={props.project.deploy}>
            <div className="card-container" style={props.project.style}>
                <div className="card-project-type-stack">

                    <span className="card-project-type" style={props.project.color}>
                        {props.project.type}
                    </span>
                    
                    <span className="card-project-stack">
                        {props.project.stack}
                    </span>

                </div>

                <h2 className="card-project-title">
                    {props.project.title}
                </h2>

                <p className="card-project-description">
                    {props.project.description}
                </p>

                <div className="link-buttons">
                    <div className='card-project-link'>
                        <a href={props.project.deploy} style={props.project.buttonCSS} target="_blank">
                            Live Project
                        </a>
                    </div>
                    <div className='card-project-link'>
                        <a href={props.project.link} style={props.project.buttonCSS} target="_blank">
                            {props.project.platform}
                        </a>
                    </div>
                    {/* <div className='card-project-link'>
                        <a href={props.project.deploy} style={props.project.buttonCSS} target="_blank">
                            Read
                        </a>
                    </div> */}
                </div>

            </div>
        // </>
    )
}
