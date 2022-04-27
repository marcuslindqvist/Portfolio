import * as React from 'react';

const ProjectItemComponent = (props) => {
    return (
        <div className="project-item">
            <h2>{props.title}</h2>
            <div className="img-container">
                {props.image ? (
                    <img src={props.image} alt={props.title} />
                ) : (
                    <p>hejhej finns ingen bild</p>
                )}
            </div>

            <p className="project-text">
                <strong>{props.short}</strong>
            </p>
            <p>{props.long}</p>
            <div className="project-links">
                {props.appLink ? (
                    <a className="hover-links" href={props.appLink}>
                        Öppna {props.title}
                    </a>
                ) : null}
                {props.github ? (
                    <a className="hover-links" href={props.github}>
                        Se koden för {props.title}
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default ProjectItemComponent;
