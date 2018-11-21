import React from 'react'
import TableCart from './TableCart';

const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3',
    color: 'white',
    fontSize: '30px',
    boxShadow: '5px 10px 8px #2B0C06',
    borderRadius: '20%',
    backgroundColor: 'rgba(0,0,0,.7)',
};

const styleTotal = {
    borderRadius: '5%',
    backgroundColor: 'rgba(255,255,255,.7)',
    color: 'black',
}
const styleSubmit = {

    backgroundColor: '#33030a',
    border: '0',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '25px',
    lineHeight: '1.4',
    padding: '6px',
    width: '180px',
    margin: 'auto',

}

const downloadStyle = {
    fontSize: '55px',
    color: 'white',
}

const styleButton = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const shippingCart = (props) => {


    const finalPrice = props.realtotal;
    
    const downloadP = <p style={downloadStyle} className = 'glow'>Download starting. . .  </p>;
    let download = null;
    let payForm = null;
    let form= null;
    let table = null;

    if (props.price === 0)  {
        download = downloadP
    } else {
        table=<TableCart/>
        form =
            <div className='glow'>
                <p>Game : {props.gamename}</p>

                <label htmlFor='copies'>Copies : </label>
                <input onChange={(event) => props.updateit(event)} type='number' id='copies' min="1" max="100"/>
                
                <p></p>
                <label htmlFor="Common">Delivery</label>
                <div className='radioBuyForm'>
                    <div>
                        <input  onChange={(event) => props.onradioc(event,"Common",  0.5)} type="radio" id="Common" name="delivery" value="Common"
                                checked = {props.radio === "Common"}/>
                        <label htmlFor="Common">Common ( 0.5% )</label>
                    </div>

                    <div>
                        <input  onChange={(event) => props.onradioc(event, "Special", 2)} type="radio" id="Special" name="delivery" value="Special" 
                            checked = {props.radio === "Special"}/>
                        <label htmlFor="Special">Special ( 2.0% )</label>
                    </div>

                    <div>
                        <input  onChange={(event) => props.onradioc(event,"Premium", 5)} type="radio" id="Premium" name="delivery" value="Premium" 
                            checked = {props.radio === "Premium"}/>
                        <label htmlFor="Premium">Premium ( 5.0% )</label>
                    </div>                  
                </div>
                <div>
                    <p>Your Data</p>  
                    <label htmlFor='payMethod'>Payment Method : </label>
                    <select required id='payMethod' required>
                        <option value=''></option>
                        <option value='creditCard'>Credit Card</option>
                        <option value='CashOnDeliver'>Cash on deliver</option>
                    </select>

                    <p></p>
                </div>
               
                <div style={styleButton}>
                    <p id='finalPrice'> Total : <span id='total' style={styleTotal}>$ {finalPrice} </span></p>
                    <button style={styleSubmit}>Check Out</button>
                </div>
            </div>;

    }
    
    payForm = form;
    return(

        <div style= {styleContainer} >
        {download}
        {payForm}
        {table}
        
        </div>
    )
}

export default shippingCart