import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import LogoutForm from '../../components/auth/RegisterForm';

function Logout() {
	return (
    <AuthLayout>
			<LogoutForm />
		</AuthLayout>
	);
}

Logout.propTypes = {};

export default Logout;