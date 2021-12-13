import * as React from "react";
import { graphql } from "gatsby";
import Nav from "../components/nav";
import Header from "../components/header";
import SideNav from "../components/SideNav";
import CV from "../assets/MarcusLindqvistCV.pdf";

export const query = graphql`
    {
        allContentfulPersonalLetter {
            nodes {
                id
                text {
                    text
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
            <div className="content-sidenav-container">
                <div className="content">
                    <div className="about-content-container image">
                        <img
                            src="https://live.staticflickr.com/4261/35221111761_f7f9ae1ec7_z.jpg"
                            width="424"
                            height="640"
                            alt="Untitled"
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
                        {data.allContentfulPersonalLetter.nodes.map(
                            (pLetter) => (
                                <div
                                    className="personal-letter"
                                    key={pLetter.id}
                                >
                                    <p>{pLetter.text.text}</p>
                                </div>
                            )
                        )}
                        <div className="skills-grid">
                            <div id="box-one">
                                <h3>Develop</h3>
                            </div>
                            <div id="box-two">
                                <h3>Design</h3>
                            </div>
                            <div id="box-three">
                                <i className="fas fa-camera"></i>
                                <h3>Photography</h3>
                            </div>
                            <div id="box-four">
                                <h3>Communication</h3>
                            </div>
                            <a href={CV} download>
                                <div className="cv-download">Hämta CV</div>
                            </a>
                        </div>
                    </div>
                </div>
                <SideNav />
            </div>
            <Nav />
        </div>
    );
};

export default AboutPage;
