import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Loader from './Loader';


const Wrapper = styled.div`
	.button {
		text-transform: none;
		font-weight: bold;
		height: 3rem;
    min-width: 10rem;
    width: max-content;
    background-color: ${props => props.theme.color.green};
		color: ${props => props.theme.color.white};
	}
  .button:hover {
    background-color: ${props => props.theme.color.green};
		color: ${props => props.theme.color.white};
  }
	.fullWidth {
		width: 100%;
	}
  .block {
    border-radius: 15px;
  }
  .rounded {
    border-radius: 25px;
  }

	.disabled {
		pointer-events: none;
	}
`;

function AppButton({ text, border, onClick, fullWidth, className, endIcon, startIcon, type, isLoading }) {
	return (
		<Wrapper>
			<Button
				type={type}
				onClick={onClick}
				endIcon={endIcon}
				startIcon={startIcon}
				className={`button ${border} ${fullWidth && 'fullWidth'} ${className} ${isLoading && 'disabled'}`}
			>
				{isLoading ? <Loader size="small" theme="light" /> : text}
			</Button>
		</Wrapper>
	);
}

AppButton.defaultProps = {
	fullWidth: false,
  type: 'button',
  border: 'block',
	onClick: () => null,
	isLoading: false
};

AppButton.propTypes = {
	text: PropTypes.string.isRequired,
	border: PropTypes.string.isRequired,
	className: PropTypes.string,
	fullWidth: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	onClick: PropTypes.func,
	endIcon: PropTypes.any,
	startIcon: PropTypes.any,
	type: PropTypes.string,
};

export default AppButton;