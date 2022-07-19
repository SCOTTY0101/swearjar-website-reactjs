import React from 'react';
import networkLogo from './image/network.png';

function Main() {
    return(
        <React.Fragment>
           <header id="main-header">
                <h1>SwearJar Software</h1>
             </header>

            <main id="main">
                    <div id="network">
                        <img src={networkLogo} alt="cloud network" id="cloudImage"/>
                    </div> 
                <h1 className="h1">Software startup company aimed at developing future requirements.</h1>
            </main>
        </React.Fragment>
    )
}

export default Main
