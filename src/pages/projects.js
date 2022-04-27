import * as React from 'react';
import Layout from '../components/layout';
import ProjectItemComponent from '../components/ProjectItemComponent';
import { graphql } from 'gatsby';

export const projectQuery = graphql`
    {
        allContentfulProject(sort: { fields: year, order: DESC }) {
            nodes {
                title
                image {
                    url
                }
                githubLink
                appLink
                id
                shortDesc {
                    shortDesc
                }
                longDesc {
                    longDesc
                }
                year
            }
        }
    }
`;
const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <div className="title-section">
                <h1 id="page-top">Projekt</h1>
            </div>
            <ul className="project-list">
                {data.allContentfulProject.nodes.map((project) => (
                    <li key={project.id}>
                        <ProjectItemComponent
                            title={project.title}
                            short={project.shortDesc.shortDesc}
                            long={project.longDesc.longDesc}
                            image={project.image?.url}
                            github={project.githubLink}
                            appLink={project.appLink}
                            key={project.id}
                        />
                    </li>
                ))}
            </ul>
            <a href="#page-top" className="hover-links">
                till toppen
            </a>
        </Layout>
    );
};

export default ProjectsPage;
