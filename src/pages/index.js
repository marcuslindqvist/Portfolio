import * as React from 'react';
import '../styling/index.css';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
export const query = graphql`
    {
        allContentfulAsset {
            nodes {
                url
            }
        }
    }
`;

const IndexPage = ({ data }) => {
    console.log(data.allContentfulAsset.nodes[1].url);
    return (
        <Layout>
            <div id="index-img">
                <div className="index-heading-start">
                    <h1>jag heter Marcus</h1>
                </div>
                <div className="index-heading-end">
                    <h1>jag är frontend-utvecklare</h1>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
