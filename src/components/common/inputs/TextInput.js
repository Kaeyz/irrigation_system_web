import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.input {
		height: 2.8rem;
		width: 100%;
		padding: 0rem 0.5rem;
		outline: 0px;
		color: ${props => props.theme.color.dark};
		border-radius: 5px;
		border: 1px solid ${props => props.theme.color.grey};
		:focus {
			border: 1px solid ${props => props.theme.color.green};
		}
	}
	.label {
		color: ${props => props.theme.color.dark};
		min-width: max-content;
	}
	.error {
		color: red;
	}
`;

function TextInput({type, onChange, value, label, error, name, clearError}) {
	return (
		<Wrapper>
				<p className="label">{label}</p>
				<input
					type={type}
					className="input p"
					value={value}
					onChange={e => {
						error && clearError(name);
						onChange(e.target.value);
					}}
				/>
				<p className="small error">{error}</p>
		</Wrapper>
	);
}

Text.defaultProps = {
	type: 'text',
};

TextInput.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	clearError: PropTypes.func.isRequired,
};

export { TextInput };