import './ProjectCard.css'

export default function ProjectCard(props) {
    console.log(props)

    let accent = props.project.accent;

    return (
        <a href={props.project.deploy}>
            <div className="card-container" style={{border: {accent}}}>
                <div className="card-project-type-stack">

                    <span className="card-project-type">
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

                <div className='card-project-github'>
                    <a href={props.project.link}>
                        {props.project.platform}
                    </a>
                </div>

            </div>
        </a>
    )
}
