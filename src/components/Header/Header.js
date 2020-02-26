import React from "react";

import "./Header.css";
import logo from './logo.webp';

class Header extends React.Component {
  render() {
    return (

      <div className="header">

        <img src={logo} alt="logo" id="logo" />
        <h1 id="title"> BAYERNMINDS </h1>

      </div>

    );
  }
}

export default Header;
