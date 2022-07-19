import React from 'react';
import gitIogo from './image/github.svg';
import linkedinLogo from './image/linkedin.svg';
import emailLogo from './image/envelope-check.svg';
import SJnavLogo from './image/favicon-32x32.png';
//import ReactDOM from 'react-dom';


function Nav() {
    return( 
        <nav className="navbar"> 
      <div className="nav-container">
        <div className="logo"><img src={SJnavLogo} alt="sJs"></img></div> 
          <ul className="nav">
            <li> 
              <a href="mailto:swearjarsoftware@gmail.com">
              <img src={emailLogo} alt="email icon"/></a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn logo"/></a>
            </li>
            <li>
              <a href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
              <img id="gitIcon" src={gitIogo} alt="github click link"/></a>
            </li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav