import React from 'react'


const buyButton = (props) => {


    const styleButton = {

        backgroundColor: '#33030a',
        border: '0',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        fontSize: '25px',
        lineHeight: '1.4',
        padding: '6px',
        width: '130px',
        margin: 'auto',
    
    }

    const buttonContainerStyle = {
        marginLeft: '8px'
    }


    const innerText = (props.price === 0) ? 'Download!' : 'Buy It!'
    return(
        <div style={buttonContainerStyle}>
            <button style ={styleButton} onClick={(event) => props.buyit(event, props.price, props.name)}> {innerText}</button>
        </div>
    )
}

export default buyButton