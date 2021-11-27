import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/actions/userActions';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import Button from '../common/Button';
import { TextInput } from '../common/inputs';


const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;

const RegisterForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const createUserIsLoading = useSelector(state => state.USER.isLoading.createUser);

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	const handleResponse = (err, res) => {
		if (err) return setErrors(err);
		if (res) navigate('/login');
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email, password, firstName, lastName, confirmPassword
		};
		dispatch(createUser(data, handleResponse));
	};

	return (
		<Wrapper square={false}>
			<div className="header">
				<h1> Hello!</h1>
				<p className="header-text">Signup to get started</p>
			</div>
			<TextInput
				label="First Name"
				value={firstName}
				name="firstName"
				onChange={setFirstName}
				error={errors.firstName && errors.firstName}
				clearError= {clearInputError}
			/>
			<TextInput
				label="Last Name"
				value={lastName}
				name="lastName"
				onChange={setLastName}
				error={errors.lastName && errors.lastName}
				clearError={clearInputError}
			/>
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
			<TextInput
				label="Confirm Password"
				type="password"
				name="confirmPassword"
				value={confirmPassword}
				onChange={setConfirmPassword}
				error={errors.confirmPassword && errors.confirmPassword}
				clearError={clearInputError}
			/>
			<Button
				text='Signup'
				fullWidth={true}
				isLoading={createUserIsLoading}
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

RegisterForm.propTypes = {};

export default (RegisterForm);