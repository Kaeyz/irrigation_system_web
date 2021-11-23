
import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import ForgetPageForm from '../../components/auth/ForgetPageForm';

function ForgetPage() {
	return (
    <AuthLayout>
			<ForgetPageForm />
		</AuthLayout>
	);
}

ForgetPage.propTypes = {};

export default ForgetPage;