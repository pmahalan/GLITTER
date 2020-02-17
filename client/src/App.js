import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div className="App">

  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>


  <div class="columns">
      <div class="column is-one-fifth">
      Lorem ipsum dolor sit amet
      </div>

      <div class="column is-one-fifth">
      Lorem ipsum dolor sit amet
      </div>

      <div class="column is-three-fifths">
      Lorem ipsum dolor sit amet
      </div>
  </div>

  <div class="columns">
    <div class="column is-one-quarter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="column">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>


<button class="button">
  Button
</button>

<button class="button is-primary">
  Primary button
</button>

<button class="button is-large">
  Large button
</button>

<button class="button is-loading">
  Loading button
</button>


</div>
  );
}


export default App;
