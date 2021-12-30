import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.radio_box {
		display:flex;
		gap: 1rem;
	}
	.error {
		color: red;
	}
`;

const RadioInput = ({ value, name, onChange, label, options, error, clearError }) => {

	const handleChange = (event) => {
		error && clearError(name);
		onChange(event.target.value);
	};

	return (
		<Wrapper>
			<p>{label}</p>
			<div className="radio_box">
				{options.map(option => (
					<div key={option.value}>
						<label>{option.name}</label>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={handleChange}
						/>
					</div>
				))}
			</div>
			<p className="small error">{error}</p>
		</Wrapper>
	);
};

RadioInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	clearError: PropTypes.func.isRequired,
};

export { RadioInput };