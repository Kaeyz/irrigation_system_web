import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

function Login() {
	return (
    <AuthLayout>
			<LoginForm />
		</AuthLayout>
	);
}

Login.propTypes = {};

export default Login;