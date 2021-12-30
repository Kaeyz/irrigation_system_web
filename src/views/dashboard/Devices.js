import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Devices from '../../components/devices/Devices';

function DevicesPage() {
	return (
    <DashboardLayout>
			<Devices />
		</DashboardLayout>
	);
}

DevicesPage.propTypes = {};

export default DevicesPage;