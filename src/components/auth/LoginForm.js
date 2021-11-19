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





const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email, password
		};
		// eslint-disable-next-line no-console
		console.log({data});
	};

	return (
    <Wrapper square={false}>
		<div className ="header">
 <h1> Hello Again!</h1>
 <p className="header-text">Welcome Back</p>
		</div>
			<TextInput
				label="Username or Email address"
				onChange={setEmail}
			/>
			<TextInput
				label="Password"
				value={password}
				onChange={setPassword}
			/>
			<Button
				text='Login'
				fullWidth={true}
				onClick={onSubmit}
      />
      <div className="links">
				<Link to="/forgot" > Forgot Password?</Link>
				<br />
        <p> Dont have an Account?
        <span> <Link to="/register" className="c-green text-semi-bold" > Signup? </Link> </span>
        </p>
			</div>
		</Wrapper>
	);
};

LoginForm.propTypes = {
/* 	loginUser: PropTypes.func.isRequired */
};

export default (LoginForm);