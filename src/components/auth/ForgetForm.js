import React, { useState } from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestForgot } from 'store/actions/userActions';

const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;

const ForgetPageForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const forgotIsLoading = useSelector(state => state.USER.isLoading.requestForgot);

	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	const handleResponse = (err, res) => {
		if (err) return setErrors(err);
		if (res) navigate('/login');
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(requestForgot(email, handleResponse));
	};

	return (
		<Wrapper square={false}>
			<div className="header">
				<h1>Forgot Password</h1>
				<p className="header-text">Enter your email to retrieve your account.</p>
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
			<Button
				text='Request Password reset'
				fullWidth={true}
				isLoading={forgotIsLoading}
				onClick={onSubmit}
			/>

			<div className="links">
				<Link to="/login" className="c-green text-semi-bold" > Back to Login. </Link>
			</div>
		</Wrapper>
	);
};

ForgetPageForm.propTypes = {};

export default (ForgetPageForm);