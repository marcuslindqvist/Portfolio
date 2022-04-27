import React from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';

export default function Layout({ children }) {
    return (
        <div className="root-container">
            <HeaderComponent />
            <div className="page-container">{children}</div>
            <NavComponent />
        </div>
    );
}
