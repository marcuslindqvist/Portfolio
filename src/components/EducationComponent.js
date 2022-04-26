import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EducationComponent = () => {
    return (
        <div>
            <StaticQuery
                query={graphql`
                    query EducationQuery {
                        allContentfulEducation(
                            sort: { fields: startDate, order: DESC }
                        ) {
                            nodes {
                                id
                                schoolName
                                startDate(formatString: "YYYY")
                                endDate(formatString: "YYYY")
                                courseName
                                description {
                                    description
                                }
                            }
                        }
                    }
                `}
                render={(data) => (
                    <ul className="comp-list">
                        {data.allContentfulEducation.nodes.map((education) => (
                            <li key={education.id} className="exp-item">
                                <span className="dot"></span>
                                <strong>
                                    <p>
                                        {education.startDate}{' '}
                                        {education.startDate !==
                                        education.endDate ? (
                                            <span>- {education.endDate}</span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </p>
                                </strong>
                                <p className="school-name">
                                    {education.schoolName}
                                </p>
                                <h3>{education.courseName}</h3>
                                <p className="desc">
                                    {education.description.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            />
        </div>
    );
};
export default EducationComponent;
