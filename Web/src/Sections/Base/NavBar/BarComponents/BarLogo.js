import React from 'react';
import WhiteHole from './IMG/logo2.jpg';
import './BarLogo.css'

const barLogo =(props) =>    {
    return(
        <div id='barLogo'>
            <a href='#'>
            <div className="logoContainer">
                <img src={WhiteHole} alt="Avatar" className="logoImage"/>
                <div className="logoOverlay">
                    <div className="logoText glow">{props.pageName}</div>
                </div>
            </div>  
           </a>
        </div>
    )
}

export default barLogo;