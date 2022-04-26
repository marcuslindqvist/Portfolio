import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
export const query = graphql`
    {
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
            <h1>Om mig</h1>
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
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
