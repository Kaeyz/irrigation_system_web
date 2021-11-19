import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	.input {
		height: 2.0rem;
		width: 100%;
		padding: 0rem 0.5rem;
		outline: 0px;
		color: ${props => props.theme.color.black};
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
`;

function TextInput({type, onChange, value, label}) {
	return (
		<Wrapper>
				<p className="label">{label}</p>
				<input
					type={type}
					className="input"
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
		</Wrapper>
	);
}

Text.defaultProps = {
	type: 'text',
};

TextInput.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export { TextInput };