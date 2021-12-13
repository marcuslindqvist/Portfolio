import * as React from "react";
import "../styling/index.css";
import Nav from "../components/nav";
import Header from "../components/header";
import SideNav from "../components/SideNav";

const IndexPage = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-sidenav-container">
                <div className="content">
                    <img
                        src="https://live.staticflickr.com/4280/35183938852_24d64ad4f0_h.jpg"
                        id="index-img"
                        width="1600"
                        height="1060"
                        alt="Untitled"
                    />
                    <div id="content">
                        <h1>DEVELOPER</h1>
                    </div>
                </div>
                <SideNav />
            </div>
            <Nav />
        </div>
    );
};

export default IndexPage;
