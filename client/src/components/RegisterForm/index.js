import React from 'react'
import Card from "../Card"



class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
		<div id="loginbox">
			<br></br>
			<Card title="Register a New User">
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group" id="entrybackground">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' id="loginbox" /><br/>
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' id="loginbox" /><br/>
						<button className="btn btn btn-primary" type='submit' id="loginbox">Submit</button>
					</div>
				</form>
			</Card>
		</div>
		)
	}
}

export default RegisterForm