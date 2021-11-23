import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import PasswordForm from 'components/auth/PasswordForm';

function Password() {
	return (
    <AuthLayout>
			<PasswordForm />
		</AuthLayout>
	);
}

Password.propTypes = {};

export default Password;