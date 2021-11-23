import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';


const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;





const LogoutForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');


	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email, password, firstName, lastName
		};
		// eslint-disable-next-line no-console
		console.log({data});
	};

	return (
    <Wrapper square={false}>
		<div className ="header">
 <h1> Hello!</h1>
 <p className="header-text">Signup to get started</p>
		</div>
			<TextInput
				label="First Name"
				onChange={setfirstName}
			/>
			<TextInput
				label="Last Name"
				onChange={setlastName}
			/>
			<TextInput
				label="Email address"
				onChange={setEmail}
			/>
			<TextInput
				label="Password"
				value={password}
				onChange={setPassword}
			/>
			<TextInput
				label="Reset Password"
				value={password}
				onChange={setPassword}
			/>
			<Button
				text='Signup'
				fullWidth={true}
				onClick={onSubmit}
      />
      <div className="links">
        <p> Already Have An Account?
        <span> <Link to="/" className="c-green text-semi-bold" > Login? </Link> </span>
        </p>
			</div>
		</Wrapper>
	);
};

LogoutForm.propTypes = {
/* 	loginUser: PropTypes.func.isRequired */
};

export default (LogoutForm);