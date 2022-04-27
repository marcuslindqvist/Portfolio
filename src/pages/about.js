import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
export const query = graphql`
    {
        allContentfulPerson(filter: { firstName: { eq: "Marcus" } }) {
            nodes {
                personal_letter {
                    text {
                        text
                    }
                    text2 {
                        text2
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
            <div className="title-section">
                <h1>Om mig</h1>
            </div>
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
                        <h2>Vem är jag?</h2>
                        <p>
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personal_letter[0].text.text
                            }
                        </p>
                        <br />
                        <p>
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personal_letter[0].text2.text2
                            }
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
