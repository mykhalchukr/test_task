import React from 'react';
import { useHistory } from 'react-router-dom';
import './SingIn.scss';

export const SignIn = () => {

	const history = useHistory();
	const handleLoginStatus = () => {
		localStorage.setItem('isLoggedIn', true);
		history.push('/people')
	};

	return (
		<form>
			<input
				type="button"
				className="button button--sign-in"
				value="sign in"
				onClick={() => {
					handleLoginStatus();
				}} />
		</form>
	);
};