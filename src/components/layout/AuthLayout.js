import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import auth_BG from '../../assets/img/auth_bg.png';

const Wrapper = styled.div`
	max-width: 100vw;
	min-height: 100vh;
	background-image: ${`url(${auth_BG})`};
  background-repeat: no-repeat;
  background-size: cover;
	display: grid;
	justify-items: center;
	align-content: center;
`;

const AuthLayout = ({children}) => {
	return (
    <Wrapper>
			{children}
		</Wrapper>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default AuthLayout;