import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';


const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;


const PasswordForm = () => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');



	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
		password,repeatPassword
		};
		// eslint-disable-next-line no-console
		console.log({data});
	};

	return (
    <Wrapper square={false}>
		<div className ="header">
 <h1>Forgot Password</h1>
 <p className="header-text">Your new password must be different from the previous used passwords.</p>
		</div>
		<br />
			<TextInput
				label="Password"
				onChange={setPassword}
			/>
			<TextInput
				label="Repeat Password"
				onChange={setRepeatPassword}
			/>
<br />
			<Button
				text='Reset Password'
				fullWidth={true}
				onClick={onSubmit}
      />
		</Wrapper>
	);
};

PasswordForm.propTypes = {
/* 	loginUser: PropTypes.func.isRequired */
};

export default (PasswordForm);