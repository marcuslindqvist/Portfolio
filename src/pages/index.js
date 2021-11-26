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

// import { useState, useEffect } from "react";
// import "./App.css";

// export const query = graphql`
//     {
//         allContentfulBlogPost {
//             nodes {
//                 id
//                 title
//                 text {
//                     text
//                 }
//             }
//         }
//     }
// `;

// function App() {
//     const [posts, setPosts] = useState(null);

//     useEffect(() => {
//         window
//             .fetch(
//                 `https://graphql.contentful.com/content/v1/spaces/[YOUR_SPACE_ID]/`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: "Bearer [YOUR_ACCESS_TOKEN]",
//                     },
//                     body: JSON.stringify({ query }),
//                 }
//             )
//             .then((response) => response.json())
//             .then(({ data, errors }) => {
//                 if (errors) {
//                     console.error(errors);
//                 }

//                 setPage(data.pageCollection.items[0]);
//             });
//     }, []);

//     if (!page) {
//         return "Loading...";
//     }

//     // render the fetched Contentful data
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={page.logo.url} className="App-logo" alt="logo" />
//                 <p>{page.title}</p>
//             </header>
//         </div>
//     );
// }

// export default App;
