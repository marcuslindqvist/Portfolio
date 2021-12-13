import * as React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import SideNav from "../components/SideNav";

const AboutPage = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-sidenav-container">
                <div className="content">
                    <div className="about-content-container">
                        <h1>COMING SOON</h1>
                    </div>
                    <div className="about-content-container"></div>
                </div>
                <SideNav />
            </div>
            <Nav />
        </div>
    );
};

export default AboutPage;
