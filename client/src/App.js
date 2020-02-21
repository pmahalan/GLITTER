import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch
} from 'react-router-dom';
import "./App.css";
import Notes from "./pages/ProtectedRoute";
import Auth from "./utils/Auth";
import Login from "./components/Login";
import {Container} from "./components/Grid";
import Register from "./components/Register";

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



{/* <Notes /> */}

{/* DO NOT DELETE THE CLOSING DIV TAG BELOW, NO MATTER WHAT. */}
</div>

  );
}

export default App;
