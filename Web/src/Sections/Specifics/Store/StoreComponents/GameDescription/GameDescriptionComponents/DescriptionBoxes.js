import React from 'react'


const descriptionBoxes = (props) =>  {

    const column = props.column;
    const row = props.row;

    const id= props.id;

    const styleBox ={
        boxShadow: '5px 10px 8px #2B0C06',
        borderRadius: '5%',
        backgroundColor: 'rgba(0,0,0,.7)',
        border: '3px solid #2B0C06',
        gridColumnStart: column,
        gridRowStart: row,
        margin: '10px',
        color: 'white'

    }
    return(
        <div style={styleBox}>
            <p className='glow'>asdasdasd</p>
        </div>
    )
};

export default descriptionBoxes