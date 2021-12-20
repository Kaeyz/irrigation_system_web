import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../common/Card';
import Button from '../common/Button';
import AddIcon from '@mui/icons-material/Add';
import AddDeviceForm from './AddDeviceForm';

const Wrapper = styled.div`
	.dashboard_header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;


const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => setIsOpen(!isOpen);
	return (
		<Wrapper>
			<div className="dashboard_header">
				<h1>Dashboard</h1>
				<Button text="Add Device" startIcon={<AddIcon />} onClick={toggleForm} />
				<AddDeviceForm isOpen={isOpen} handleClose={toggleForm}/>
			</div>

			<Card>
				This is a card content
			</Card>
		</Wrapper>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
