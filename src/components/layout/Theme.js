import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
	color: {
    green: '#12A55E',
    dark: '#13293D',
    grey: '#d4cbcb',
    white: '#F8F8F8'
	}
};

const Wrapper = styled.div`
	background-color: ${theme.color.white};
	min-height: 100vh;
	min-width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.2rem;
		font-family: Poppins;
    color: ${theme.color.dark}
	}
	div, span {
    margin: 0;
    padding: 0;
  }
	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
		padding: 0;
	}
	h1, .h1 {
    font-size: 1.8rem;
    font-weight: 700;

	}
	h2, .h2 {
    font-size: 1.1rem;
    font-weight: 700;
	}
	h3, .h3 {
    font-size: 1.1rem;
    font-weight: 600;
	}
	p, .p {
	font-size: 1.0rem;
    font-weight: 400;
	}
  .small {
    font-size: 0.75rem;
  }
  .text-semi-bold {
    font-weight: 700;
	
  }
	a {
		font-size: 1.0rem;
    font-weight: normal;
		color: ${theme.color.dark};
	}
	.c-green {
		color: ${theme.color.green};

	}
	.links p {
		padding-top: 0.7rem;
	
	}
	
`;

const Theme = (props) =>
	<ThemeProvider theme={theme}>
		<div>
			<GlobalStyle />
			<Wrapper>
				{props.children}
			</Wrapper>
		</div>
	</ThemeProvider>
	;

Theme.propTypes = {
	children: PropTypes.any.isRequired
};

export default Theme;