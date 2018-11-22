import React from 'react'
import BuyButton from '../../../../../Base/BuyButton/BuyButton'



const descriptionBoxes = (props) =>  {
    var gamesJson = require('../../../../../Base/Games/Games.json');

    console.log(gamesJson[1].Title);

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
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    let finalText = null;
    let finalStyle = null;

    const titleText = gamesJson[id].Title;
    const titleStyle ={
        fontSize: '40px',
        marginTop: '15px',
        marginBottom: '15px'
    }

    const priceText = (gamesJson[id].Price === 0) ? 'FREE !!!': '$ ' + gamesJson[id].Price + '.00';
    const priceStyle = {
        fontSize: '30px',
        textShadow: '2px 2px 0px rgba(188,210,244,0.5)'
    }

    const tagsText = 'Tags : ' + gamesJson[id].Tags.join(' - ');
    const tagsStyle = {
        textShadow: '2px 2px 0px rgba(188,210,244,0.5)',
    }

    const ratingText = 'User Rating : ' + gamesJson[id].Rating + '/10';
    const ratingStyle = {
        fontSize: '35px'
    }

    const descriptionText =  gamesJson[id].Description ;
    const descriptionStyle = {
        fontSize: '13px'
    }

    const devsText = "Developer : " + gamesJson[id].Developer;

    let buyIt = null;


    switch(props.idDisplay) {
        case 1:
            finalText = titleText;
            finalStyle = titleStyle;
            break;
        case 2:
            finalText = priceText;
            finalStyle = priceStyle;
            buyIt = <BuyButton price={gamesJson[id].Price} name={gamesJson[id].Title} buyit={props.buyit}/>
            break;
        case 3:
            finalText = tagsText;
            finalStyle = tagsStyle;
            break;
        case 4:
            finalText = ratingText;
            finalStyle = ratingStyle;
            break;
        case 5:
            finalText = descriptionText;
            finalStyle = descriptionStyle;
            break;
        case 6:
            finalText = devsText;
            break;
        default: 
            console.log('error');
    }

    return(
        <div style={styleBox}>
            <p style={finalStyle} className='glow'>{finalText}</p>
            {buyIt}
        </div>
    )
};

export default descriptionBoxes