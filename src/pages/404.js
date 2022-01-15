import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>"Scott Mercer Portfolio"</title>
            <meta name="description" content="Portfolio" />
        </Helmet>

        <div className="fourMain">
            <h1>NOT FOUND</h1>
            <div className="fourLinkContainer">
                <a href="/" className="fourIcon fa-home">
                    <span className="label">Return Home</span>
                </a>
            </div>
            <p className="fourContent">
                You just hit a route that doesn&#39;t exist... the sadness.
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;
