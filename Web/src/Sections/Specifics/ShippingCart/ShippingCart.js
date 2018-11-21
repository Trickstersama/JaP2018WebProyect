import React from 'react'


const shippingCart = (props) => {
    console.log(props.gamename)
    return(
        <div>
            <p> {props.gamename}</p>
        </div>
    )
}

export default shippingCart