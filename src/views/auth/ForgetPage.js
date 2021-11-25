
import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import ForgetForm from '../../components/auth/ForgetForm';

function ForgetPage() {
	return (
    <AuthLayout>
			<ForgetForm />
		</AuthLayout>
	);
}

ForgetPage.propTypes = {};

export default ForgetPage;