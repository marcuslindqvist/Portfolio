import * as React from "react";
import { graphql } from "gatsby";
import "../styling/index.css";

export const query = graphql`
    {
        allContentfulBlogPost {
            nodes {
                id
                title
                text {
                    text
                }
            }
        }
    }
`;

// markup
const IndexPage = ({ data }) => {
    return (
        <main>
            <h1>Hej!</h1>
            {data.allContentfulBlogPost.nodes.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.text.text}</p>
                </div>
            ))}
        </main>
    );
};

export default IndexPage;
