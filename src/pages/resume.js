import * as React from "react";
import Header from "../components/header";
import SideNav from "../components/SideNav";
import Nav from "../components/nav";
import EducationComponent from "../components/EducationComponent";

const Resume = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-sidenav-container">
                <div className="content">
                    <EducationComponent />
                </div>
                <SideNav />
            </div>
            <Nav />
        </div>
    );
};

export default Resume;
