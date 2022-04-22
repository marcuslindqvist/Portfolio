import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const WorkLifeComponent = () => {
    return (
        <div>
            <StaticQuery
                query={graphql`
                    query JobQuery {
                        allContentfulPerson(
                            filter: {
                                firstName: { eq: "Marcus" }
                                surname: { eq: "Lindqvist" }
                            }
                        ) {
                            nodes {
                                work_experience {
                                    id
                                    employer
                                    endDate(formatString: "YYYY")
                                    isOngoing
                                    startDate(formatString: "YYYY")
                                    title
                                    description {
                                        description
                                    }
                                }
                            }
                        }
                    }
                `}
                render={(data) => (
                    <div className="resume-item">
                        <ul className="comp-list">
                            {data.allContentfulPerson.nodes[0].work_experience.map(
                                (job) => (
                                    <li key={job.id} className="exp-item">
                                        <span className="dot"></span>

                                        <strong>
                                            <p>
                                                {job.startDate}
                                                {job.endDate !==
                                                    job.startDate &&
                                                job.isOngoing === true ? (
                                                    <span> - Pågående</span>
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
                                )
                            )}
                        </ul>
                    </div>
                )}
            />
        </div>
    );
};
export default WorkLifeComponent;

// {
//                         allContentfulWorkExperience {
//                             nodes {
//                                 employer
//                                 id
//                                 isOngoing
//                                 startDate(formatString: "YYYY")
//                                 endDate(formatString: "YYYY")
//                                 title
//                                 description {
//                                     description
//                                 }
//                             }
//                         }
//                     }
