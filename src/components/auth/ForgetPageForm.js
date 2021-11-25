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


const ForgetPageForm = () => {
	const [email, setEmail] = useState('');



	const onSubmit = (event) => {
		event.preventDefault();
		const data = {
			email
		};
		// eslint-disable-next-line no-console
		console.log({data});
	};

	return (
    <Wrapper square={false}>
		<div className ="header">
 <h1>Forgot Password</h1>
 <p className="header-text">Enter your email to retrieve your account.</p>
		</div>
			<TextInput
				label="Email address"
				onChange={setEmail}
			/>
			<Button
				text='Send Instructions'
				fullWidth={true}
				onClick={onSubmit}
      />

      <div className="links">
        <p> Enter NewPassword?
        <span> <Link to="/password" className="c-green text-semi-bold" > New Password? </Link> </span>
        </p>
			</div>
		</Wrapper>
	);
};

ForgetPageForm.propTypes = {
/* 	loginUser: PropTypes.func.isRequired */
};

export default (ForgetPageForm);