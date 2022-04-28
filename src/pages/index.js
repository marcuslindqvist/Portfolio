import * as React from 'react';
import '../styling/index.css';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <div id="index-img">
                <div className="index-heading start">
                    <h1>Marcus Lindqvist</h1>
                </div>
                <div className="index-heading end">
                    <h1>Frontend developer</h1>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
