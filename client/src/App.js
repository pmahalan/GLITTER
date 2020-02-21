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

//now we have all the stuff we need, 
// let's render the components for the public login/account creation page.

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

  <Router>
		<div>
      <Nav className="App-header"/>
			<Container>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={ProtectedRoute}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>


{/* <Notes /> */}

{/* DO NOT DELETE THE CLOSING DIV TAG BELOW, NO MATTER WHAT. */}
</div>

  );
}

export default App;
