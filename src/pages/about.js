import * as React from "react";
import { graphql } from "gatsby";
import Nav from "../components/nav";
import Header from "../components/header";
import SideNav from "../components/SideNav";
// import CV from "../assets/MarcusLindqvistCV.pdf";

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
const space = "\u00a0";
const AboutPage = ({ data }) => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-sidenav-container about">
                <div className="content">
                    <div className="about-content-container image">
                        <img
                            src={
                                data.allContentfulPerson.nodes[0]
                                    .personal_letter[0].profilePicture.file.url
                            }
                            alt="profile picture"
                        />
                    </div>
                    <div className="about-content-container text">
                        <div id="about-heading">
                            <span>
                                <h1>
                                    Vill{space}lära{space}mig
                                </h1>
                            </span>
                            <span className="about-big-text">
                                <h1>
                                    {space}mer{space}om{space}allt{space}
                                </h1>
                            </span>
                        </div>
                        <p>
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personal_letter[0].text.text
                            }
                        </p>
                    </div>
                </div>

                {/* <SideNav /> */}
            </div>
            <div className="skills-row">
                {data.allContentfulSkill.nodes.map((skill) => (
                    <div className="skill-item" key={skill.id}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description.description}</p>
                    </div>
                ))}
            </div>
            <Nav />
        </div>
    );
};

export default AboutPage;
