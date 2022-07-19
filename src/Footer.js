import React from 'react';
import gitIogo from './image/github.svg'

function Footer() {
    return(
        <footer>
            <p>Click GitHub icon to view code.</p>
            <a href="http://www.github.com/SCOTTY0101/swearjar-website-reactjs" target="_blank" rel="noopener noreferrer">
            <img id="gitIcon" src={gitIogo} alt="github click link"/></a>
            <p> &copy; SwearJarSoftware 2019-2022</p>
        </footer>
    )
}

export default Footer