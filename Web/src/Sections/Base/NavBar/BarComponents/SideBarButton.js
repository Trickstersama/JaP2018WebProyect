import React from 'react'
import lineBar from './IMG/forum-sep.png'


const sidebarButton = (prop) => {

    return(
        <div>
            <a className='glow' href="#">{prop.name}</a>
            { prop.sepBar > 0 ?
            <div>
                <img src={lineBar} alt='sep' ></img> 
            </div> 
             : null }
        </div>
    )
};

export default sidebarButton;