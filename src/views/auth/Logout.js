import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import LogoutForm from '../../components/auth/LogoutForm';

function Logout() {
	return (
    <AuthLayout>
			<LogoutForm />
		</AuthLayout>
	);
}

Logout.propTypes = {};

export default Logout;