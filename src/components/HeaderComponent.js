import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
const HeaderComponent = () => {
    const space = '\u00a0';

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
                            <button id="email-icon">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    id="envelope-closed"
                                />
                                <FontAwesomeIcon
                                    icon={faEnvelopeOpen}
                                    id="envelope-open"
                                />
                                email me!
                            </button>
                            <span id="email-text">
                                {
                                    data.allContentfulPerson.nodes[0]
                                        .personalInformation.email
                                }
                            </span>
                        </a>{' '}
                    </h4>
                </header>
            )}
        />
    );
};
export default HeaderComponent;
