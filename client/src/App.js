import React from "react";
import "./App.css";

function App() {
  return (
  <div className="App" id="wholebackground">

  <div className="App-header">
    <h2>Glitter!</h2>
  </div>


  <div className="columns">
      <div className="column" id="welcome">
      Welcome to Glitter, your space to dream and simply be inspired.
      </div>
  </div>

  <div className="columns">
    <div className="column is-one-quarter"> Don't know where you want to go? Roll the dice!</div>

    <div className="column" id="note-area"> 
    
        <p id="noteslabel"> Your Notes </p>

        <p id="aspect"> Destination </p>
        <input className="form-control" type="text" id="place" placeholder="Where woud you go right now if you could?"></input>

        <br></br>

        <p id="aspect"> Time of Year </p>
        <input className="form-control" type="text" id="timeofyear" placeholder="Summer, Spring, Fall, Winter, or all four?"></input>

        <br></br>

        <p id="aspect"> Best Noms </p>
        <input className="form-control" type="text" id="cuisine" placeholder="Sushi? Poutine? Tiramisu? Escargo?"></input>

        <br></br>

        <p id="aspect"> Things to do </p>
        <input className="form-control" type="text" id="thingstodo" placeholder="Spa day? Catch up with friends? Museum tours?"></input>

        <br></br>

        <p id="aspect"> I spy... </p>
        <input className="form-control" type="text" id="landmarks" placeholder="Volcanoes, pyramids, Eiffel Tower, Taj Mahal..."></input>

        <br></br>        

        <button id="note-submit" className="button">Submit!</button>

    </div>

  </div>

</div>
  );
}


export default App;
