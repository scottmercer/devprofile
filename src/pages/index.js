import React from 'react';
import Helmet from 'react-helmet';

import Gallery from '../components/Gallery';
import Layout from '../components/layout';

const HomeIndex = () => {
    const siteTitle = 'Scott Mercer Portfolio';
    const siteDescription = 'Portfolio';

    return (
        <Layout>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
            </Helmet>

            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>
                            About Me
                            <br />
                        </h2>
                    </header>
                    <p>
                        I am a Web Developer and have officially been studying
                        and practicing since 2018. I have a beautiful wife and
                        three kids that I love to spend time with. I am well
                        versed in many technologies to include React, Node,
                        Javascript, Typescript, Java, GaphQl, AWS, IBM Cloud,
                        Heroku. I am currently a Developer with IBM in Monroe
                        Louisiana. In my off time I love to work with start ups
                        and non-profits to see their visions come to life for
                        their companies. I have a strong aptitude to orchestrate
                        and lead projects to completion with current trends and
                        technologies in order to help companies manage and
                        deploy projects in a economical and timely manner. If
                        you have a project that your interested in seeing come
                        to life I would love to hear from you and partner to
                        help that happen. Please use the link below to reach out
                        and I look forward to working with you on that vision.
                    </p>
                </section>

                <section id="two">
                    <header className="major">
                        <h2>Projects</h2>
                        <br />
                    </header>
                    <Gallery />
                </section>

                <section id="three">
                    <h2>Contact Me</h2>
                    <p>
                        I would love to help bring your vision to life. Please
                        use one of the links below and contact me.
                    </p>

                    <div className="">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-mobile">
                                    <span className="label">Phone</span>
                                </h3>
                                <a href="tel:318-210-7315">318-210-7315</a>
                            </li>
                            <li>
                                <h3 className="icon fa-envelope-o">
                                    <span className="label">Email</span>
                                </h3>
                                <a href="mailto:randall.mercer@yahoo.com?subject=Project Inquiry from Scott Mercer Dev Profile">
                                    randall.mercer@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomeIndex;
