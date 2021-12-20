import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.radio_box {
		display:flex;
		gap: 1rem;
	}
`;

const RadioInput = ({ value, name, onChange, label, options }) => {

	const handleChange = (event) => {
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
		</Wrapper>
	);
};

RadioInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired
};

export { RadioInput };