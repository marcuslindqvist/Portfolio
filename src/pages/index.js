import * as React from "react";
import "../styling/index.css";
import Nav from "../components/nav";
import Header from "../components/header";
import SideNav from "../components/SideNav";

const IndexPage = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="content-sidenav-container index">
                <div className="content">
                    <div id="index-img">
                        <img
                            src="https://live.staticflickr.com/4280/35183938852_24d64ad4f0_h.jpg"
                            alt="Untitled"
                        />
                    </div>
                    <div id="img-header">
                        <h1>front end developer</h1>
                    </div>
                </div>
                {/* <SideNav /> */}
            </div>
            <Nav />
        </div>
    );
};

export default IndexPage;
