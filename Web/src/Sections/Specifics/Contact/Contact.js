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

const styleH2 = {
    textAlign: 'center'
}
const stylePMessage = {
    fontSize: '25px',
}

const createAccount = () =>   {
    return (
        <div style={styleContainer}>
        <form style={styleForm} className='glow inputForm' action="index.html" method="post">
          <div style={styleInsideForm}>
              <h2 style= {styleH2}>Send a message to the Dev Team</h2>
              <label htmlFor="mail">E-Mail</label>
              <input type="email" name="correo" placeholder="example@mail" required/>
              <br/>
              <br/>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
              <br/>
              <br/>
              <p style={stylePMessage}> Message</p>
              <textarea name="MainMessage" rows="8" cols="80" required></textarea>
              <br/>
              <br/>
              <div id='submitButton'>
                      <input style = {styleSubmit} className='glow' type="submit"/>
              </div>
          </div>
        <br/>
        <br/>
        </form>
      </div>
    )

}

export default createAccount;