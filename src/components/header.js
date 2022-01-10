import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Header = () => {
    const space = "\u00a0";

    return (
        <StaticQuery
            query={graphql`
                query PersonQuery {
                    allContentfulPerson(
                        filter: {
                            firstName: { eq: "Marcus" }
                            surname: { eq: "Lindqvist" }
                        }
                    ) {
                        nodes {
                            firstName
                            surname
                            personalInformation {
                                email
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <header className="top-header">
                    <h4>
                        <Link to="/">
                            {data.allContentfulPerson.nodes[0].firstName}
                            {space}
                            {data.allContentfulPerson.nodes[0].surname}
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
