import React from 'react';
import './SingIn.scss';


export const SignIn = ({ handleLoginStatus }) => {

	return (
		<form>
			<input type="button" value="sign in" onClick={() => {
				handleLoginStatus();
			}} />
		</form>
	);
};