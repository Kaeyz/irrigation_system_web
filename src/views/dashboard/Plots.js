import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Plots from '../../components/plots/Plots';

function PlotsPage() {
	return (
    <DashboardLayout>
			<Plots />
		</DashboardLayout>
	);
}

PlotsPage.propTypes = {};

export default PlotsPage;