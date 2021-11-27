import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  .linear {
    border-radius: 10px;
    height: 1rem;
    width: 20rem;
  }

  .MuiLinearProgress-bar {
    background-color: ${props => props.theme.color.green};
  }

  .circular {
    color: ${props => props.theme.color.green};
    font-size: 200rem;
    height: 1rem;
    width: 20rem;
  }
  
  .light {
    color: ${props => props.theme.color.white};
  }
`;

export default function Loader({type, theme}) {
  return (
    <Wrapper>
      {type === 'circular' && <CircularProgress className={`circular ${theme === 'light' && 'light'}`}  size={sizeOptions.small} />}
      {type === 'linear' && <LinearProgress className="linear"/>}
    </Wrapper>
  );
}

const sizeOptions = {
  small: 25,
  normal: 35,
  large: 45,
};

Loader.defaultProps = {
  size: 'small',
  type: 'circular',
  color: 'primary'
};

Loader.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
  size: PropTypes.string.isRequired
};