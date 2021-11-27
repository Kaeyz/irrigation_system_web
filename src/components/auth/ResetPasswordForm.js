import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, verifyToken } from 'store/actions/userActions';


const Wrapper = styled(Paper)`
	padding: 2rem;
	max-width: 30rem;
	min-width: 25rem;
	display: grid;
	grid-gap: 0.6rem;
`;


const ResetPasswordForm = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { token } = useParams();
	const resetPasswordIsLoading = useSelector(state => state.USER.isLoading.resetPassword);

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState('');

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	useEffect(() => {
		dispatch(verifyToken(token, (err) => {
			if (err) navigate('/login');
		}));
	}, []);

	const handleResponse = (err) => {
		if (err) setErrors(err);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const data = { token, password, confirmPassword };
		dispatch(resetPassword(data, handleResponse));
	};

	return (
		<Wrapper square={false}>
			<div className="header">
				<h1>Forgot Password</h1>
				<p className="header-text">Enter new Password</p>
			</div>
			<br />
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
			<br />
			<Button
				text='Reset Password'
				fullWidth={true}
				isLoading={resetPasswordIsLoading}
				onClick={onSubmit}
			/>
		</Wrapper>
	);
};

ResetPasswordForm.propTypes = {};

export default (ResetPasswordForm);