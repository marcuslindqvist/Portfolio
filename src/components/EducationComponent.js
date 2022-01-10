import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const EducationComponent = () => {
    return (
        <div>
            <StaticQuery
                query={graphql`
                    query EducationQuery {
                        allContentfulPerson(
                            filter: {
                                firstName: { eq: "Marcus" }
                                surname: { eq: "Lindqvist" }
                            }
                        ) {
                            nodes {
                                education {
                                    courseName
                                    description {
                                        description
                                    }
                                    endDate(formatString: "YYYY")
                                    id
                                    schoolName
                                    startDate(formatString: "YYYY")
                                }
                            }
                        }
                    }
                `}
                render={(data) => (
                    <div className="resume-item">
                        <h2>Utbildning</h2>
                        <ul className="comp-list">
                            {data.allContentfulPerson.nodes[0].education.map(
                                (education) => (
                                    <li key={education.id} className="exp-item">
                                        <span className="dot"></span>
                                        <strong>
                                            <p>
                                                {education.startDate}{" "}
                                                {education.startDate !==
                                                education.endDate ? (
                                                    <span>
                                                        - {education.endDate}
                                                    </span>
                                                ) : (
                                                    <span></span>
                                                )}
                                            </p>
                                        </strong>
                                        <p className="school-name">
                                            {education.schoolName}
                                        </p>
                                        <br />
                                        <h3>{education.courseName}</h3>
                                        <p className="desc">
                                            {education.description.description}
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
export default EducationComponent;
