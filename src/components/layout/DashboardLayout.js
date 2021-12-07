import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Logout, ViewList, Terrain } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/actions/userActions';
import Modal from '../common/Modal';

const Wrapper = styled.div`
	display: flex;
	height: 100vh;

	.side-bar {
		background-color: ${props => props.theme.color.green};
		border-radius: 0px 10px 10px 0px;
		padding: 5rem 1rem 0rem 1rem;
		min-width: 240px;
		gap: 1rem;
	}
	.side-bar > * {
		margin-bottom: 0.5rem;
	}

	.link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: ${props => props.theme.color.light};
		color: ${props => props.theme.color.white};
		border-radius: 0.5rem;
		text-decoration: none;
		padding: 10px 20px;
	}
	
	.isActive {
		background: ${props => props.theme.color.white};
		color: ${props => props.theme.color.green};
	}
	
	@media only screen and (max-width: 800px) {
		display: block;
		.side-bar {
			align-items: center;
			min-height: 3rem;
			border-radius: 0;
			padding: 0.5rem;
			display: flex;
			gap: 0.5rem;
		}
		.side-bar > * {
		margin-bottom: 0rem;
	}
}

.main {
	padding: 5rem 1rem 0rem 2rem;
}
`;

const DashboardLayout = ({ children }) => {
	const dispatch = useDispatch();
	const logoutClick = () => dispatch(logoutUser());
	const userType = useSelector(state => state.USER.user.userType);

	const [isOpen, setIsOpen] = useState(false);
	const toggleModal = () => setIsOpen(!isOpen);

	const links = {
		admin: [
			{ name: 'Dashboard', path: '/dashboard', icon: Home },
			{ name: 'Devices', path: '/devices', icon: ViewList },
			{ name: 'Logout', path: '/', icon: Logout, onClick: logoutClick  }
		],
		user: [
			{ name: 'Dashboard', path: '/dashboard', icon: Home },
			{ name: 'My Devices', path: '/devices', icon: ViewList },
			{ name: 'Plots', path: '/plots', icon: Terrain },
			{ name: 'Open Modal', path: '/dashboard', icon: Logout, onClick: toggleModal  },
			{ name: 'Logout', path: '/', icon: Logout, onClick: logoutClick  }
		]
	};

	const displayLink = links[userType || 'user'].map(data => {
		const { icon, name, path, onClick } = data;
		const Icon = icon;
		return (
			<NavLink
				className={d => `link ${d.isActive && 'isActive'}`}
				onClick={onClick}
				key={path}
				to={path}
			>
				<Icon />
				{name}
			</NavLink>
		);
	});

	return (
		<Wrapper>
			<div className="side-bar">{displayLink}</div>
			<div className="main">{children}</div>
			<Modal isOpen={isOpen} handleClose={toggleModal}>
				This is a modal
			</Modal>
		</Wrapper>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default DashboardLayout;