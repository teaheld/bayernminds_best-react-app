import React from 'react';

import './App.css';

import Header from '../Header/Header';
import Players from '../Players/Players';

class App extends React.Component {
  render() {
    return (

      <div className="window">

        <Header />

        <div className="blank">
        </div>

        <Players />

      </div>

    );
  }
}

export default App;