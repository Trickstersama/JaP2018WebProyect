import React, { Component } from 'react';
import './App.css';
import NavBar from './Sections/Base/NavBar/NavBar';

class App extends Component {

  state = {
    pageSection:  {
      store: true,
      browse: false,
      contact: false,
    }

  }

  render() {
    return (
      <div className="App">
        <div id='navBarSection'>
          <NavBar section={this.state.pageSection}/>
        </div>

        <div id='specificContentSection'>
          <h2>HOLAsdfsdf</h2>
          <h2>HOLAsdfsdf</h2>
          <h2>HOLAsdfsdf</h2>
          <h2>HOLAsdfsdf</h2>
          <h2>HOLAsdfsdf</h2>

        </div>

        <div id='FooterSection'>

        </div>


      </div>

    );
  }
}

export default App;
