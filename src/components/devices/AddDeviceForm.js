import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import { TextInput, RadioInput } from '../common/inputs';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addDevice } from 'store/actions/deviceActions';

const AddDeviceForm = ({ handleClose, isOpen }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.DEVICES.isLoading);
	const [serialNumber, setSerialNumber] = useState('');
	const [type, setType ] = useState('moisture_sensor');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	const handleResponse = (err, res) => {
		if (err) return setErrors(err);
		if (res) handleClose();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const data = { serialNumber, type };
		dispatch(addDevice(data, handleResponse));
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose} >
			<h2>Add Device</h2>

			<TextInput
				label="Device Serial Number"
				name="serialNumber"
				value={serialNumber}
				onChange={setSerialNumber}
				error={errors.serialNumber && errors.serialNumber}
				clearError={clearInputError}
			/>

			<br />
			<RadioInput
				label="Device Type"
				name="type"
				value={type}
				onChange={setType}
				options={deviceTypeOptions}
				defaultValue={deviceTypeOptions[0].value}
				error={errors.type && errors.type}
				clearError={clearInputError}
			/>

			<br />

			<Button
				text="Add Device"
				fullWidth={true}
				onClick={onSubmit}
				isLoading={isLoading.addDevice}
			/>

		</Modal>
	);
};

AddDeviceForm.defaultProps = {
	handleClose: () => {},
	isOpen: false,
};

AddDeviceForm.propTypes = {
	handleClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

const deviceTypeOptions = [
	{ name: 'Moisture Sensor', value: 'moistureSensor' },
	{ name: 'Water Valve', value: 'controlValve' },
];

export default AddDeviceForm;

