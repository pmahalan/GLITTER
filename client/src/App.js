import React, { Component } from "react";
import "./App.css";

function App() {
  return (
  <div className="App" id="wholebackground">

  <div className="App-header">
    <h2>Glitter!</h2>
  </div>


  <div class="columns">
      <div class="column" id="welcome">
      Welcome to Glitter, your space to dream and simply be inspired.
      </div>
  </div>

  <div class="columns">
    <div class="column is-one-quarter"> Don't know where you want to go? Roll the dice!</div>
    <div class="column" id="notes"> Your Notes </div>
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
