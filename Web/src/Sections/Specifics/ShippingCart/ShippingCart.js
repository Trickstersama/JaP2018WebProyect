import React from 'react'

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

const shippingCart = (props) => {

/*     calculatorHandle = (event) => {
        const finalCost = null;
    } */
    const price = props.price;

    const downloadP = <p style={downloadStyle} className = 'glow'>Download starting. . .  </p>;
    let download = null;
    let payForm = null;
    let form= null;

    if (props.price === 0)  {
        download = downloadP
    } else {

        form =
            <div className='glow'>
                <p>Game : {props.gamename}</p>
                <label htmlFor='copies'>Copies : </label>
                <input type='number' id='copies' min="1" max="100" value="1"/>
                <p></p>
                <label htmlFor='payMethod'>Payment Method : </label>
                <select required id='payMethod'>
                    <option value=''></option>
                    <option value='creditCard'>Credit Card</option>
                    <option value='CashOnDeliver'>Cash on deliver</option>
                </select>
                <p></p>
                <div className='radio'>
                    <div>
                        <input type="radio" id="free" name="delivery" value="Free"
                                checked/>
                        <label htmlFor="free">Free ( 0.5% )</label>
                    </div>

                    <div>
                        <input type="radio" id="Special" name="delivery" value="Special"/>
                        <label htmlFor="Special">Special ( 2.0% )</label>
                    </div>

                    <div>
                        <input type="radio" id="Premium" name="delivery" value="Premium"/>
                        <label htmlFor="Premium">Premium ( 5.0% )</label>
                    </div>
                    
                </div>
                <p id='finalPrice'> Total : <span id='total' style={styleTotal}>$ {price} </span></p>
                <button style={styleSubmit}>Check Out</button>
            </div>;

    }
    
    payForm = form;
    return(

        <div style= {styleContainer} >
        {download}
        {payForm}
        </div>
    )
}

export default shippingCart