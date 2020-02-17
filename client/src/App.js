import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div className="App">

  <div className="App-header">
    <h2>Glitter!</h2>
  </div>


  <div class="columns">
      <div class="column" id="welcome">
      Welcome to Glitter, your space to dream and simply be inspired.
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
