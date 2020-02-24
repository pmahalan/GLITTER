import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton";


//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
	marginRight:50
};
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar" id="loginnav">
        {/* <Link className="navbar-brand" to="/">
          Auth Plate
        </Link> */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="" id="wholenavbar">
            <li className="nav-item" id="navitem">
              <Link className="" id="navbuttontext" to="/protected"> ⟡ Protected Page ⟡  </Link>
              <Link className="" id="navbuttontext" to="/register"> ❤ Register a New User ❤ </Link>
              <AuthButton className="" id="navbuttontext" to="/login">  Login  </AuthButton>
            </li>
          
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
