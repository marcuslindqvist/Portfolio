import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
                query PersonQuery {
                    allContentfulPerson {
                        nodes {
                            id
                            personalInformation {
                                email
                                name
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <header className="top-header">
                    <h4>
                        <Link to="/">
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personalInformation.name
                            }
                        </Link>
                    </h4>
                    <h4>
                        <a
                            href={`mailto:${data.allContentfulPerson.nodes[0].personalInformation.email}`}
                        >
                            {
                                data.allContentfulPerson.nodes[0]
                                    .personalInformation.email
                            }
                        </a>
                    </h4>
                </header>
            )}
        />
    );
};
export default Header;
