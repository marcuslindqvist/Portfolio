import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const WorkLifeComponent = () => {
    return (
        <div>
            <StaticQuery
                query={graphql`
                    {
                        allContentfulWorkExperience(sort: { fields: endDate }) {
                            nodes {
                                id
                                employer
                                endDate(formatString: "YYYY")
                                location
                                title
                                startDate(formatString: "YYYY")
                                description {
                                    description
                                }
                            }
                        }
                        allContentfulSkill {
                            nodes {
                                id
                                description {
                                    description
                                }
                                title
                            }
                        }
                    }
                `}
                render={(data) => (
                    <div className="resume-item">
                        <ul className="comp-list">
                            {data.allContentfulWorkExperience.nodes
                                .slice(0)
                                .reverse()
                                .map((job) => (
                                    <li key={job.id} className="exp-item">
                                        <span className="dot"></span>

                                        <strong>
                                            <p>
                                                {job.startDate}
                                                {job.endDate !==
                                                job.startDate ? (
                                                    <span>
                                                        {' '}
                                                        - {job.endDate}
                                                    </span>
                                                ) : (
                                                    <span></span>
                                                )}
                                            </p>
                                        </strong>
                                        <p className="school-name">
                                            {job.employer}
                                        </p>
                                        <br />
                                        <h3>{job.title}</h3>
                                        <p className="desc">
                                            {job.description.description}
                                        </p>
                                    </li>
                                ))}
                        </ul>
                        {/* <div className="skills-row">
                            {data.allContentfulSkill.nodes.map((skill) => (
                                <div className="skill-item" key={skill.id}>
                                    <h3>{skill.title}</h3>
                                    <p>{skill.description.description}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                )}
            />
        </div>
    );
};
export default WorkLifeComponent;
