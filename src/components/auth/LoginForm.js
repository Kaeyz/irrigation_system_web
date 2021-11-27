import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/actions/userActions';


const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;


const LoginForm = () => {
	const dispatch = useDispatch();
	const loginUserIsLoading = useSelector(state => state.USER.isLoading.loginUser);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	const handleResponse = (err) => {
		if (err) return setErrors(err);
	};


	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email, password
		};
		dispatch(loginUser(data, handleResponse));
	};

	return (
		<Wrapper square={false}>
			<div className="header">
				<h1> Hello Again!</h1>
				<p className="header-text">Welcome Back</p>
			</div>
			<TextInput
				label="Email address"
				type="email"
				name="email"
				value={email}
				onChange={setEmail}
				error={errors.email && errors.email}
				clearError={clearInputError}
			/>
			<TextInput
				label="Password"
				type="password"
				name="password"
				value={password}
				onChange={setPassword}
				error={errors.password && errors.password}
				clearError={clearInputError}
			/>
			<Button
				text='Login'
				fullWidth={true}
				isLoading={loginUserIsLoading}
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

LoginForm.propTypes = {};

export default (LoginForm);