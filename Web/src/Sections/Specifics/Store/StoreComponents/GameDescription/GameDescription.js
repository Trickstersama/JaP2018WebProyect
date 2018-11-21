import React from 'react'
import DescriptionBoxes from './GameDescriptionComponents/DescriptionBoxes'
import GameDescriptionSlider from './GameDescriptionComponents/GameDescriptionSlider'



const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3',
    fontSize: '35px',
    color: 'grey',
    display: 'grid',
    gridTemplateColumns: '10px 1fr 1fr 10px',
    gridTemplateRows: '10px 1fr 2fr 1fr 1fr 10px'
};

const styleGrid = {
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 3,
    marginTop: '10px'
}
const gameDescription = (props) =>   {

    console.log(props.id)
    return(
        <div style={styleContainer}>
            <DescriptionBoxes id={props.id} text={'asd'} row={2} column={2}/>
            <DescriptionBoxes id={props.id} text={'asd'} row={2} column={3}/>
            <div  style={styleGrid}>
                <GameDescriptionSlider id={props.id}/>
            </div>
            <DescriptionBoxes id={props.id} text={'asd'} row={4} column={2}/>
            <DescriptionBoxes id={props.id} text={'asd'} row={4} column={3}/>
            <DescriptionBoxes id={props.id} text={'asd'} row={5} column={2}/>
            <DescriptionBoxes id={props.id} text={'asd'} row={5} column={3}/>
 
        </div>
    )
    
}

export default gameDescription