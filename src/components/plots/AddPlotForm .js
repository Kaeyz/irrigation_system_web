import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import { TextInput } from '../common/inputs';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addPlot } from 'store/actions/plotActions';

const AddDeviceForm = ({ handleClose, isOpen }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.PLOTS.isLoading);
	const [name, setName] = useState('');
	const [moistureRequirement, setMoistureRequirement] = useState('');
	const [controlValve, setControlValve] = useState('');
	const [moistureSensor, setMoistureSensor] = useState('');
	const [errors, setErrors] = useState({});

	const clearInputError = (field) => setErrors({ ...errors, [field]: '' });

	const handleResponse = (err, res) => {
		if (err) return setErrors(err);
		if (res) handleClose();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const data = { name, moistureRequirement, controlValve, moistureSensor };
		dispatch(addPlot(data, handleResponse));
	};

	return (
		<Modal isOpen={isOpen} handleClose={handleClose} >
			<h2>Add Plot</h2>

			<TextInput
				label="Plot Name"
				name="name"
				value={name}
				onChange={setName}
				error={errors.name && errors.name}
				clearError={clearInputError}
			/>

			<br />

			<TextInput
				label="Moisture Requirement"
				name="moistureRequirement"
				value={moistureRequirement}
				onChange={setMoistureRequirement}
				error={errors.moistureRequirement && errors.moistureRequirement}
				clearError={clearInputError}
			/>

			<br />

			<TextInput
				label="Moisture Sensor"
				name="moistureSensor"
				value={moistureSensor}
				onChange={setMoistureSensor}
				error={errors.moistureSensor && errors.moistureSensor}
				clearError={clearInputError}
			/>

			<br />

			<TextInput
				label="Control Valve"
				name="controlValve"
				value={controlValve}
				onChange={setControlValve}
				error={errors.controlValve && errors.controlValve}
				clearError={clearInputError}
			/>

			<br />

			<Button
				text="Add Plot"
				fullWidth={true}
				onClick={onSubmit}
				isLoading={isLoading.addPlot}
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


export default AddDeviceForm;

