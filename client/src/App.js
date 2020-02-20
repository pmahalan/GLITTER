import React from "react";
import "./App.css";
import Notes from "./pages/index"

function App() {
  return (
  
  <div className="App" id="wholebackground">

      <div className="App-header">
        <p>G L I T T E R</p>
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
