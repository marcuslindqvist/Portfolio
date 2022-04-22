import * as React from 'react';
import { Link } from 'gatsby';

const NavComponent = () => {
    return (
        <nav className="nav">
            <Link
                to="/"
                activeClassName="activeLink"
                isCurrent={true}
                className="nav-link nav-link-fade-up"
            >
                Hem
            </Link>

            <Link
                to="/about"
                activeClassName="activeLink"
                isCurrent={true}
                className="nav-link nav-link-fade-up"
            >
                Om
            </Link>

            <Link
                to="/resume"
                activeClassName="activeLink"
                isCurrent={true}
                className="nav-link nav-link-fade-up"
            >
                Resumé
            </Link>

            <Link
                to="/projects"
                activeClassName="activeLink"
                isCurrent={true}
                className="nav-link nav-link-fade-up"
            >
                Projekt
            </Link>
        </nav>
    );
};
export default NavComponent;
