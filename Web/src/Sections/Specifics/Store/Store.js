import React from 'react';

const styleText={
    color: "white"
};

const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3'
};



const store = () => {
    return (
        <div style={styleContainer}>
            <p style={styleText}>hola k ase</p>
        </div>
    )
};

export default store