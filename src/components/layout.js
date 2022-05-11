import React from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
    return (
        <div className="root-container">
            <Helmet
                htmlAttributes={{
                    lang: 'sv',
                }}
            >
                <meta charSet="utf-8" />
                <title>Marcus Lindqvist Developer</title>
            </Helmet>
            <HeaderComponent />
            <div className="page-container">{children}</div>
            <NavComponent />
        </div>
    );
}
