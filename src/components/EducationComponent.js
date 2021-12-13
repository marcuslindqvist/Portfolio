import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const EducationComponent = () => {
    return (
        <div>
            <StaticQuery
                query={graphql`
                    query EducationQuery {
                        allContentfulEducation {
                            nodes {
                                courseName
                                description {
                                    description
                                }
                                id
                                schoolName
                                startDate(formatString: "")
                                isOngoing
                                endDate
                            }
                        }
                    }
                `}
                render={(data) => (
                    <div>
                        <h4>Utbildning</h4>
                        {data.allContentfulEducation.nodes.map((education) => (
                            <ul key={education.id}>
                                <li>
                                    Tid:{education.startDate} till
                                    {education.endDate} <br />
                                    Skola:{education.schoolName}
                                    <br />
                                    Utbildning: {education.courseName}
                                </li>
                            </ul>
                        ))}
                    </div>
                )}
            />
        </div>
    );
};
export default EducationComponent;
