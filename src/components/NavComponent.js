import * as React from 'react';
import { Link } from 'gatsby';

const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'link-active' } : {};
};
const NavComponent = () => {
    return (
        <nav className="nav">
            <Link to="/" getProps={isActive} className="nav-link">
                Hem
            </Link>

            <Link to="/about" getProps={isActive} className="nav-link">
                Om
            </Link>

            <Link to="/resume" getProps={isActive} className="nav-link">
                Resumé
            </Link>

            <Link to="/projects" getProps={isActive} className="nav-link">
                Projekt
            </Link>
        </nav>
    );
};
export default NavComponent;
