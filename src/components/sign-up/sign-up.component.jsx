import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// we are importing auth for authorization of users and createUserProfileDocument for creating users
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

// class component because we are storing what user is typing into form inputs
class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('passwords dont match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			// this will clear our form
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

    // handleChange will take the target name and value and handle the change they have
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

	render() {
		// this is how you destracture in es6;
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
