import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../common/Button';
import AddIcon from '@mui/icons-material/Add';
import AddDeviceForm from './AddDeviceForm';
import { useEffect } from 'react';
import { getDevices, onDevicePageChange } from 'store/actions/deviceActions';
import DevicesTable from './DevicesTable';

const Wrapper = styled.div`
	.devices_header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
`;


const Devices = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.USER.user);
	const devices = useSelector(state => state.DEVICES.devices);
	const [isOpen, setIsOpen] = useState(false);
	const toggleForm = () => setIsOpen(!isOpen);

	const onPageChange = (newPage) => {
		dispatch(onDevicePageChange(newPage));
		dispatch(getDevices());
	};

	useEffect(() => {
		dispatch(getDevices());
	}, []);
	return (
		<Wrapper>
			<div className="devices_header">
				<h1>Devices</h1>
				{user.userType === 'admin' && <Button text="Add Device" startIcon={<AddIcon />} onClick={toggleForm} />}
				{user.userType === 'admin' && <AddDeviceForm isOpen={isOpen} handleClose={toggleForm} />}
			</div>
			<DevicesTable
				tableData={devices.data}
				page={devices.page}
				count={devices.count}
				limit={devices.limit}
				onPageChange={onPageChange}
			/>
		</Wrapper>
	);
};

Devices.propTypes = {

};

export default Devices;
