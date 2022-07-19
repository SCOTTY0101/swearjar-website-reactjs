import React from 'react';
import aswLogo from './image/cloud.svg';
import reactLogo from './image/reactImg.ico';
import ball8Logo from './image/ball.png';
import SJsponceLogo from './image/favicon-32x32.png';
//import colourBtn from './ColourBtn.js';
//import resetBtn from './RestBtn';
import Magic from './magicBall.js';

function Article() {
    return(
        <div>
        <article className="article">
      <div className="article-container">
        <p>Front-End website for Development testing and Production.<span className="br"></span>
        Server sponcership available with PayPal to have company name added to the website credits.</p><span className="br"></span>
        <form action="https://www.paypal.com/donate" method="post" target="_top" >
          <input type="hidden" name="business" value="E2HRYJQA2AFBJ" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="item_name" value="Website donation to help pay for server running costs." />
          <input type="hidden" name="currency_code" value="AUD" />
          <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="Donate" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <span className="br"></span>
        <p>Cloud hosted, static website with AWS.<span className="br"></span>
        Running on HTTPS (SSL) secure connection on port 443.<span className="br"></span>
        2022 will also see the website evolve with new software added.<span className="br"></span>
        <b>Click the cloud to visit AWS console.</b><span className="br"></span>
        <button><a href="http://www.aws.amazon.com/console" target="_blank" rel="noopener noreferrer">
        <img src={aswLogo} alt="cloud" id="xs-cloud"/></a></button><span className="br"></span>
        <b>Working with all things JavaScript to understand Full Stack development.</b><span className="br"></span>
        Incorporating the MERN stack into the website (MongoDB, Express, React, NodeJS) <span className="br"></span>
        and implementing Design Patterns in the JavaScript code. 
        </p>
      </div>
    </article>


    <article className="article">
      <div className="article-container">                 
        <p><b>Website running the React UI component library. Originally built with HTML, CSS(Flexbox) and JavaScript.</b>
        <span className="br">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo}  alt="logo" id="react-logo" /></a></span>
        Powered by the React. NodeJS(backend code) and MongoDB(database) software is in the development stage.<span className="br"></span>
        Building websites for mobile first to scale correctly.</p>
        <p>The "Swear Jar" name comes the challenges of chasing bugs and solving problems when writing code.</p>
        <p><b>Launching SwearJar Software in 2021/2022.</b><span className="br"></span>
        Programming development and refining of skills started in 2019. Monthly website updates will be pushed to the cloud.</p>
        <p><b>Email and have a website built to your design requirements.</b><span className="br"></span>
        Website development lead times are 2 to 4 weeks for a basic static site. Fully custom website, 4 to 16 weeks.<span className="br"></span>
        Custom website involves a six stage proccess : Analysing requirements, Design, Revisions, 
        Development, Content and Migration/Go live.</p>
      </div>        
    </article>
    <div>
      <div id="bne" ></div>
    </div>

    <hr></hr>

    <article className="article">
      <div className="article-container">
        <h2>Testing React and JavaScript via DOM</h2>
        <img className="ball" src={ball8Logo}  alt="magic decision ball" />
        <h3 className="pBall">Magic Decision ball</h3>
       {/* <button className="magic" onClick="Magic()">Ask a question and click for an answer?</button> */}
        <button className="magic" onClick={Magic}>Ask a question and click for an answer?</button> 

        <hr></hr>

        <h3>Change background Colour</h3>
        <button onClick={() => document.querySelector('body').style.backgroundColor = "#ffffff"}>Change colour</button>
        <button type="button" onClick={() => document.querySelector('body').style.backgroundColor = "#ADD8E6"}>Reset colour</button> 
      </div>

      <h3 id="sponcer">Sponsors & Website credits : <img src={SJsponceLogo} alt="sJs"></img></h3>
    </article>

    <hr></hr>
     
        </div>
    )
}

export default Article
