import React from 'react';

const styleContainer = {
    gridColumnStart:'2',
    gridRowStart: '3'
};

const styleForm = {
    color: 'white',
    fontSize: '20px',
    boxShadow: '5px 10px 8px #2B0C06',
    borderRadius: '5%',
    backgroundColor: 'rgba(0,0,0,.7)',
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

const styleInsideForm = {
    paddingLeft:'15px',
    paddingTop: '25px',
}


const createAccount = () =>   {
    return (
        <div style={styleContainer}>
            <form style={styleForm} className='glow inputForm' action="index.html" method="post">
            <div style={styleInsideForm}>
                <div>
                    <label htmlFor="FirstName">Name:</label>
                    <input type="text" id="FirstName" name="user_FirstName" pattern="[A-Za-z]+" title="Use only upper and lower case letters" maxLength="30" required placeholder="First Name" />
                    <input type="text" id="LastName" name="user_LastName" pattern="[A-Za-z]+" title="Use only upper and lower case letters" maxLength="30" required placeholder="Last Name" />
                </div>
                <br/>
                <div>
                    <label htmlFor="BirthDay">Date of birth:</label>
                    <input type="date" id="BirthDay" name="Day_Birthday"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="mail">E-mail:</label>
                    <input type="email" id="mail" name="user_mail" placeholder="Example@mail.com" required/>
                </div>
                <br/>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="user_password" pattern="[A-Za-z0-9]{8,24}" title="Must have between 8 and 24 characters" required/>
                </div>
                <br/>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="password" id="confirmpassword" pattern="[A-Za-z0-9]{8,24}" title="Must have between 8 and 24 characters" name="user_confirmpassword"  required/>
                </div>
                <br/>
                <div>

                </div>
                <div>
                    <label htmlFor="Accept">I acept all terms and conditions</label>
                    <input type="checkbox" id="Accept" name="Terms" value="" required/>
                </div>
                <br/>
                <div id='submitButton'>
                    <input style = {styleSubmit} className='glow' type="submit"/>
                </div>
                <br/>
                <br/>
            </div>
                
            </form>
        </div>
    )
}

export default createAccount;