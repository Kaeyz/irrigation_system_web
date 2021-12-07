import React from 'react';
import { Modal } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Close } from '@mui/icons-material';

const MyModal = styled(Modal)`
	border: none;
`;

const Wrapper = styled.div`
  .modal {
      position: absolute;
      background-color: ${props => props.theme.color.white};
      border: none;
      min-width: 28rem;
      min-height: 30rem;
      width: max-content;
      height: max-content;
      padding: 1rem;
      border-radius: 10px;
  }
  .close {
    display: flex;
    justify-content: flex-end;
  }
  .closeIcon {
    cursor: pointer;
  }
`;

function getModalStyle() {
	return {
		top: '50%',
		left: '50%',
		transform: `translate(-${50}%, -${50}%)`,
	};
}

export default function AppModal({ isOpen, handleClose, children }) {
  const [modalStyle] = React.useState(getModalStyle);
	return (
		<MyModal
			open={isOpen}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick') handleClose();
      }}
		>
			<Wrapper >
        <div style={modalStyle} className="modal">
          <div onClick={handleClose} className="close"><Close className="closeIcon" /></div>
					{children}
				</div>
			</Wrapper>
		</MyModal>
	);
}

AppModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	children: PropTypes.any
};