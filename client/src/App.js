import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch
} from 'react-router-dom';
import Notes from "./pages/ProtectedRoute";
import Nav from "./components/Nav";
import Auth from "./utils/Auth";
import Login from "./components/Login";
import {Container} from "./components/Grid";
import Register from "./components/Register";
import "./App.css";

//now we have all the stuff we need, 
// let's render the components for the public login/account creation page.

function App() {
  return (
  
  <div className="App" id="wholebackground">

      <div className="App-header">
        <p id="glittertitle">G L I T T E R</p>
      </div>

      <div className="columns">
          <div className="column" id="welcome">
          Welcome to Glitter, your space to dream and simply be inspired.
          </div>
      </div>

  <Router>
		<div>
      <Nav/>
			<Container>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={Notes}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>

	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>

	<p id="audrey"> ⟡  </p>  
	<p id="audrey"> "Nothing is impossible, the word itself says 'I'm possible'!" - Audrey Hepburn </p>
	<p id="audrey"> ⟡  </p>

{/* DO NOT DELETE THE CLOSING DIV TAG BELOW, NO MATTER WHAT. */}
</div>

  );

}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
	<div>
	
	 <Route {...rest} render={props => (
		
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<div className="container">
						<br></br>
				<div className="alert alert-danger text-center" id="plzlogin" role="alert">
						This page is private to authenticated users.
					</div>

				<div className="row">
					<div className="col-sm"></div>
					<div className="col-sm">
					<h3 id="plzlogin">Please Register or Login</h3>
					</div>
					<div className="col-sm"></div>
				</div>
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}}/>
			</div>	
		)
		)}/>
		</div>
	</Router>

	)

export default App;
