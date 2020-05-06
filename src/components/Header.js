import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/Picture1.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Scott Mercer</strong>, a Web Developer
        <br />
        with a passion for code and skill in troubleshooting.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
