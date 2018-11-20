import React from 'react';
import gif from '../NavBar/BarComponents/IMG/animation1.gif';

const styleName ={
    fontSize: '60px',
    color: '#fff',
    textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080',
    textAlign: 'center'
}

const styleGif = {
    width: '100px',
    height: '100px',
} 

const styleHeader = {
    gridColumnStart: '2',
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center'
};

const sectionHeader = (prop) => {
    return(
        <div style={styleHeader}>
            <div>
                <img style={styleGif} alt="logoGif" src={gif}></img>
            </div>
            <div>
                <p style={styleName}>{prop.name}</p>
            </div>
            <div>
                <img style={styleGif} alt="logoGif" src={gif}></img>
            </div>
        </div>

    )
}

export default sectionHeader