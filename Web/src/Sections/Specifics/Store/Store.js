import React from 'react';
import StoreCarousel from './StoreComponents/StoreCarousel'


const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3'
};


const store = (props) => { 

    return (
        <div  style={styleContainer}>
            <StoreCarousel showInfoGame={props.showInfoGame} name='Trending'/>;
            <StoreCarousel showInfoGame={props.showInfoGame} name='Special Offers'/>;
            <StoreCarousel showInfoGame={props.showInfoGame} name='Tag: Multiplayer'/>;
            
        </div>
    )
};

export default store