import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://linkedin.com/in/randallscottmercer"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github/scottmercer" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon fa-dribbble">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
        <li>
          <a
            href="mailto:randall.mercer@yahoo.com"
            className="icon fa-envelope-o"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Scott Mercer</li>
        {/* <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li> */}
      </ul>
    </div>
  </div>
)

export default Footer
