import React from 'react';
import PropTypes from 'prop-types';
import {Paper} from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: max-content;
	border-radius: 15px;
	.card {
		height: max-content;
		min-height: 10rem;
		min-width: 10rem;
		padding: 1rem;
	}
	.green {
		background-color: green;
	}
	.large {
		width: 70vw;
		min-height: 12rem;
	}
`;

const Card = ({ children, theme, size, className }) => {
	return (
		<Wrapper>
			<Paper
				elevation={3}
				square={false}
				className={`card ${theme && theme}  ${size && size} ${className}`}
			>
				{children}
			</Paper>
		</Wrapper>
	);
};

Card.defaultProps = {
	theme: 'white',
	size: 'large',
};

Card.propTypes = {
	children: PropTypes.any,
	theme: PropTypes.string.isRequired,
	className: PropTypes.string,
	size: PropTypes.string
};

export default Card;

