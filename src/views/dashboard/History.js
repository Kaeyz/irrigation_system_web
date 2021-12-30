import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import History from '../../components/history/History';

function HistoryPage() {
	return (
    <DashboardLayout>
			<History />
		</DashboardLayout>
	);
}

HistoryPage.propTypes = {};

export default HistoryPage;