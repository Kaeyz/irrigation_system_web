import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: green;
`;

const DashboardLayout = ({children}) => {
	return (
    <Wrapper>
			{children}
		</Wrapper>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default DashboardLayout;