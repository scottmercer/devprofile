import React from "react";
import Helmet from "react-helmet";

import Gallery from "../components/Gallery";
import Layout from "../components/layout";

const HomeIndex = () => {
  const siteTitle = "Scott Mercer Portfolio";
  const siteDescription = "Web Developer Portfolio";

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
            I am a Web Developer and have officially been studying and
            practicing since 2018. I have worked on numerous projects since
            completing coding bootcamp from Bethel School of Technology. Bethel
            School of Technology is affiliated with WozU which is owned by Apple
            Cofounder Steve Wozniak. I have a beautiful wife and three kids that
            I love to spend time with. The languages and technologies I have
            worked with most are Html, Css, React, Javascript, Angular,
            React-Native, Wordpress, PHP, and Node. I have also worked with
            backend technologies such as mongodb, amazon aws, and amazon elastic
            beanstalk. I am self taught and proud of the sites and web apps I
            have been able to contribute to. I am currently looking for full
            time remote work and would love to work for a great company that has
            a team I can dive in with. If you like my portfolio please get in
            touch with me at one of the ways below.
          </p>
          <ul className="actions">
            <li>
              {/* <a href="#" className="button">
                Learn More
              </a> */}
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              {/* <a href="#" className="button">
                Full Portfolio
              </a> */}
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I would love to connect with you. Please feel free to reach out.
          </p>
          {/* <div className="row"> */}
          {/* <div className="8u 12u$(small)"> */}
          {/* <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form> */}
          {/* </div> */}
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Columbia, LA 71418
                <br />
                United States
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                318-210-7315
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:randall.mercer@yahoo.com">
                  randall.mercer@yahoo.com
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomeIndex;
