import React, { Component } from 'react';
import './App.css';
import NavBar from './Sections/Base/NavBar/NavBar';
import SectionHeader from './Sections/Base/SectionHeader/SectionHeader';
import backgroundImageContent from './Sections/Base/NavBar/BarComponents/IMG/Blood.png';
import Store from './Sections/Specifics/Store/Store';
import CreateAccount from './Sections/Specifics/CreateAccount/CreateAccount';
import Contact from './Sections/Specifics/Contact/Contact';
import BrowseGames from './Sections/Specifics/BrowseGames/BrowseGames';
import GameDescription from './Sections/Specifics/Store/StoreComponents/GameDescription/GameDescription'
import ShippingCart from './Sections/Specifics/ShippingCart/ShippingCart'



class App extends Component {
  constructor() {
    super(...arguments)
    this.resetValuesGame = this.resetValuesGame.bind(this)
/*     this.priceActualGame = 0;
    this.nameActualGame = ''; */
  }
  state = {
/*     pageValues:  {
      Store: true,
      BrowseGames: false,
      createAccount: false,
      contact: false,
      gameInfo: false
    }, */
    actualSection: 'Store',
    idGame: 0,
    nameActualGame: '',
    priceActualGame: 0,
    radioValue: "Common",
    radioValuePercent: 0.5,
    copiesAmount: 1,
    actualTotal: 0, 
  }

  styleGrid = {
    backgroundImage: "url(" + backgroundImageContent + ")",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    display: 'grid',
    gridTemplateColumns: '1fr 60% 1fr',
    gridTemplateRows: '200px 50px 600px 1fr 1fr',

  }

  

  clickAndBuyIt = (event, price, gameName) => {
    const name = 'Your Shopping Cart';
    this.setState({
      actualSection: name,
      nameActualGame: gameName,
      priceActualGame : price
      });
  }

  onRadioChange = (event, value, percent) =>  {
    const radVal = value;
    const valPercent = percent;
    this.setState({
      radioValuePercent: valPercent,
      radioValue: radVal,
      actualTotal: this.state.priceActualGame * this.state.copiesAmount * ((valPercent/100) + 1)
    })
    console.log(this.state.actualTotal)
  }

  updateAmout = (event) => {
    this.setState({
      copiesAmount: event.target.value,
      actualTotal: this.state.priceActualGame * event.target.value * ((this.state.radioValuePercent/100) + 1)
    });

}


  clickNavButtonHandler = (event) => {
    const name = event.target.name;
    this.setState({actualSection: name});
  };


  clickInfoGame = (event, id) =>  {
    const name = 'gameInfo';
    this.numGame = id;
    this.setState({
      actualSection: name,
      idGame: id
      });
 
  };

  resetValuesGame ()  {
    console.log('reiniciando');
    this.setState({
      radioValue: "Common",
      radioValuePercent: 0.5,
    });
  }

  render() {
    let gameDescription = null;
    let showStore = null;
    let showCreateAccount = null;
    let showContact = null;
    let showBrowseGames = null;
    let showShoppingCart = null;


    if(this.state.actualSection === 'Store')  {
    /*   {this.resetValuesGame()} */
      showStore = <Store showInfoGame={this.clickInfoGame} />;
    } else{
      if (this.state.actualSection === 'Browse Games')  {
        showBrowseGames = <BrowseGames/>;
      } else {
        if (this.state.actualSection === 'Contact') {
          showContact = <Contact/>;
        } else  {
          if (this.state.actualSection === 'Create Account')  {
            showCreateAccount = <CreateAccount/>;
          } else {
            if (this.state.actualSection === 'Your Shopping Cart')  {
              showShoppingCart= <ShippingCart 
                price={this.state.priceActualGame} 
                updateit={this.updateAmout} 
                gamename={this.state.nameActualGame} 
                radio={this.state.radioValue} 
                onradioc={this.onRadioChange}
                realtotal={this.state.actualTotal}
                copies ={this.state.copiesAmount}
                radioperc = {this.state.radioValuePercent}
                
                />;
            } else
              gameDescription = <GameDescription id={this.state.idGame} buyit={this.clickAndBuyIt} />
          }
        }
      }
    }

    return (
      <div className="App">
        <div id='navBarSection'>
          <NavBar  section={this.state.pageSection} buttonHandler={this.clickNavButtonHandler}/>
        </div>

        <div style={this.styleGrid} id='specificContentSection'>
          <SectionHeader name={ (this.state.actualSection === 'gameInfo') ? 'Store': this.state.actualSection}/>
          {showStore}
          {showCreateAccount}
          {showBrowseGames}
          {showContact}
          {gameDescription}
          {showShoppingCart}
        </div>

        <div id='FooterSection'>

        </div>


      </div>

    );
  }
}

export default App;
