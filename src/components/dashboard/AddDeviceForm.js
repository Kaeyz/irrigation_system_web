import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import { TextInput, RadioInput } from '../common/inputs';
import Button from '../common/Button';

const AddDeviceForm = ({handleClose, isOpen}) => {
	const [name, setName] = useState('');
	const [serialNumber, setSerialNumber] = useState('');
	const [type, setType ] = useState('moisture_sensor');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	return (
		<Modal isOpen={isOpen} handleClose={handleClose} >
			<h2>Add Device</h2>

			<br />
			<TextInput
				label="Device Name"
				name="name"
				value={name}
				onChange={setName}
				error={errors.name && errors.name}
				clearError={clearInputError}
			/>

			<br />

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
				value={type}
				onChange={setType}
				options={deviceTypeOptions}
				defaultValue={deviceTypeOptions[0].value}
			/>

			<br />

			<Button text="Add Device" fullWidth={true}  />

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
	{ name: 'Moisture Sensor', value: 'moisture_sensor' },
	{ name: 'Water Valve', value: 'water_valve' },
];

export default AddDeviceForm;

