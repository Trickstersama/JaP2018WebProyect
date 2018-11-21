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



class App extends Component {
  constructor() {
    super(...arguments)
    this.numGame = 222;
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
  }

  styleGrid = {
    backgroundImage: "url(" + backgroundImageContent + ")",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    display: 'grid',
    gridTemplateColumns: '1fr 60% 1fr',
    gridTemplateRows: '200px 50px 600px 1fr 1fr',

  }

  clickNavButtonHandler = (event) => {
    const name = event.target.name;
    this.setState({actualSection: name});
  };


  clickInfoGame = (event, id) =>  {
    const name = 'gameInfo';
    this.numGame = id;
    console.log(id + 'ola');
    this.setState({
      actualSection: name,
      idGame: id
      });
 
  };

  render() {

    let gameDescription = null;
    let showStore = null;
    let showCreateAccount = null;
    let showContact = null;
    let showBrowseGames = null;

    if(this.state.actualSection === 'Store')  {
      showStore = <Store showInfoGame={this.clickInfoGame}/>;
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
            gameDescription = <GameDescription id={this.state.idGame}/>
          }
        }
      }
    }

    return (
      <div className="App">
        <div id='navBarSection'>
          <NavBar section={this.state.pageSection} buttonHandler={this.clickNavButtonHandler}/>
        </div>

        <div style={this.styleGrid} id='specificContentSection'>
          <SectionHeader name={ (this.state.actualSection === 'gameInfo') ? 'Store': this.state.actualSection}/>
          {showStore}
          {showCreateAccount}
          {showBrowseGames}
          {showContact}
          {gameDescription}
        </div>

        <div id='FooterSection'>

        </div>


      </div>

    );
  }
}

export default App;
