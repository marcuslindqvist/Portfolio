import * as React from 'react';
import WorkLifeComponent from '../components/WorkLifeComponent';
import Layout from '../components/layout';

const Resume = () => {
    return (
        <Layout>
            <div className="content-sideNavComponent-container">
                <div className="content resume">
                    <div className="resume-title">
                        <h1>Arbetsliv</h1>
                        //flippa mellan de olika
                        <h1>Utbildning</h1>
                    </div>
                    <WorkLifeComponent />
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
