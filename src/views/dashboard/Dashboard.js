import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Dashboard from '../../components/dashboard/Dashboard';

function DashboardPage() {
	return (
    <DashboardLayout>
			<Dashboard />
		</DashboardLayout>
	);
}

DashboardPage.propTypes = {};

export default DashboardPage;