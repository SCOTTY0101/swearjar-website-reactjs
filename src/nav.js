import React  from 'react';
//import ReactDOM from 'react-dom';

function Nav() {
    return( 
        <nav className="navbar"> 
      <div className="nav-container">
        <div className="logo"><img src="image/favicon-32x32.png" alt="sJs"></img></div> 
          <ul className="nav">
            <li> 
              <a href="mailto:swearjarsoftware@gmail.com">
              <img src="image/envelope-check.svg" alt="email icon"/></a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
              <img src="image/linkedin.svg" alt="LinkedIn logo"/></a>
            </li>
            <li>
              <a href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
              <img id="gitIcon" src="image/github.svg" alt="github click link"/></a>
            </li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav