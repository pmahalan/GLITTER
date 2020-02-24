import React from 'react'
import Card from "../Card"

class LoginForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
		<div id="loginbox">
			<br></br>
			<Card title="Login with your Username and Password" >
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group" id="entrybackground">
						<input className="form-control" ref={(input) => this.usernameElem = input} id="loginbox" type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control" ref={(input) => this.passwordElem = input} id="loginbox" type='password' name="password" placeholder='Password' /><br/>
						<button className="btn btn-success" type='submit' id="loginbox">
							Submit
						</button>
					</div>
				</form>
			</Card>	
		</div>
		)
	}
}

export default LoginForm