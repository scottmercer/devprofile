import React from 'react';

const Footer = () => (
    <div id="footer">
        <div className="inner">
            <ul className="icons">
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://linkedin.com/in/randallscottmercer"
                        className="icon fa-linkedin"
                    >
                        <span className="label">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/scottmercer"
                        className="icon fa-github"
                    >
                        <span className="label">Github</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:randall.mercer@yahoo.com?subject=Project Inquiry from Scott Mercer Dev Profile"
                        className="icon fa-envelope-o"
                    >
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
            <ul className="copyright">
                <li>&copy; Scott Mercer</li>
            </ul>
        </div>
    </div>
);

export default Footer;
