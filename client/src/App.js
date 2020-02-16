import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <section class="section">
    
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>GLITTER</h2>
      </div>

    <div class="columns">

      <div class="column">
        My first website with <strong>Bulma</strong>!
      </div>

      <div class="column">
        Second column
      </div>

      <div class="column">
        Third column
      </div>

      <div class="column">
        Fourth column
      </div>

  </div>

  </section>
  );
}


export default App;
