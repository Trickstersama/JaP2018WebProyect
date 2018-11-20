import React from 'react'
import lineBar from './IMG/forum-sep.png'


const sidebarButton = (props) => {

    return(
        <div>
            <a onClick={ (event) => props.buttonHandler(event) } className='glow' name ={props.name} href="#">{props.name}</a>
            { props.sepBar > 0 ?
            <div>
                <img src={lineBar} alt='sep' ></img> 
            </div> 
             : null }
        </div>
    )
};

export default sidebarButton;