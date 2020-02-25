import React from 'react'
import {
	withRouter
} from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";


const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
			<button id="navbuttontext"  
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Logout
			</button>
	) : (
	<Link
		id="navbuttontext"  
        className=""
        to="/login"
         > ⟡ Login ⟡
    </Link>
	)
))

export default AuthButton;