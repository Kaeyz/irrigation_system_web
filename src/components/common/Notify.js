import React, { useState, useEffect } from 'react';
import { Snackbar, Typography, Alert } from '@mui/material';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notify = ({ alerts }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(true);
	}, [alerts]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const display = (alerts) => {
		return (
			<Snackbar
				open={open}
				autoHideDuration={alerts.duration || 3000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<Alert
					severity={alerts.type ? alerts.type : undefined}
				>
					<Typography variant="body1" component="p" style={{color: 'black'}}>{alerts.msg}</Typography>
				</Alert>
			</Snackbar>
		);
	};

	const { status } = alerts;

	return (
		<React.Fragment>
			{status && display(alerts)}
		</React.Fragment>
	);
};

Notify.propTypes = {
	alerts: PropTypes.object,
};

const mapStateToProps = state => ({
	alerts: state.ALERT
});

export default connect(mapStateToProps)(Notify);