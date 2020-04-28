import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const CustomAlert = ({ error, severity, onClose }) => {
	debugger;
	const [open, setOpen] = useState(true);

	return (
		<Snackbar
			open={open && !!error}
			autoHideDuration={6000}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			onExit={() => {
				debugger;
				onClose();
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
		>
			<Alert
				severity={severity}
				variant='filled'
				onClose={() => {
					setOpen(false);
				}}
			>
				{error}
			</Alert>
		</Snackbar>
	);
};

export default CustomAlert;
