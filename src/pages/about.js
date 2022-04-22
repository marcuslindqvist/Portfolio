import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
export const query = graphql`
    {
        allContentfulSkill(
            filter: {
                person: {
                    elemMatch: {
                        firstName: { eq: "Marcus" }
                        surname: { eq: "Lindqvist" }
                    }
                }
            }
        ) {
            nodes {
                id
                title
                description {
                    description
                }
            }
        }
        allContentfulPerson(
            filter: {
                firstName: { eq: "Marcus" }
                surname: { eq: "Lindqvist" }
            }
        ) {
            nodes {
                personal_letter {
                    text {
                        text
                    }
                    profilePicture {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`;
const AboutPage = ({ data }) => {
    return (
        <Layout>
            <div className="about-content-container">
                <div className="image-container">
                    <img
                        src={
                            data.allContentfulPerson.nodes[0].personal_letter[0]
                                .profilePicture.file.url
                        }
                        alt="profile"
                    />
                </div>
                <div className="about-text">
                    <section className="who">
                        <h1>Vem är jag?</h1>
                        <p>
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personal_letter[0].text.text
                            }
                        </p>
                    </section>
                </div>
            </div>

            {/* <div className="skills-row">
                {data.allContentfulSkill.nodes.map((skill) => (
                    <div className="skill-item" key={skill.id}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description.description}</p>
                    </div>
                ))}
            </div> */}
        </Layout>
    );
};

export default AboutPage;
