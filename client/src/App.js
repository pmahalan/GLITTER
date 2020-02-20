import React from "react";
import "./App.css";
import Notes from "../src/pages/Notes"

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

    <Notes />

{/* DO NOT DELETE THE CLOSING DIV TAG BELOW, NO MATTER WHAT. */}
</div>

  );
}

export default App;
