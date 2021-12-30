import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../common/Card';
import Button from '../common/Button';
import AddIcon from '@mui/icons-material/Add';
import AddDeviceForm from '../devices/AddDeviceForm';
import AddPlotForm from '../plots/AddPlotForm ';

const Wrapper = styled.div`
	.dashboard_header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;


const Dashboard = () => {
	const user = useSelector(state => state.USER.user);
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => setIsOpen(!isOpen);
	return (
		<Wrapper>
			<div className="dashboard_header">
				<h1>Dashboard</h1>
				{user.userType === 'admin' && <Button text="Add Device" startIcon={<AddIcon />} onClick={toggleForm} />}
				{user.userType === 'user' && <Button text="Add Plot" startIcon={<AddIcon />} onClick={toggleForm} />}
				{user.userType === 'admin' && <AddDeviceForm isOpen={isOpen} handleClose={toggleForm} />}
				{user.userType === 'user' && 	<AddPlotForm isOpen={isOpen} handleClose={toggleForm} />}
			</div>

			<Card>
				This is a card content
			</Card>
		</Wrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
