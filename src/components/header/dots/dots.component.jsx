import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { signOut } from '../../../redux/user/user.actions';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';

import { ListOptionLink } from '../header.styles';

export const Dots = ({ signOut }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				aria-label='more'
				aria-controls='long-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				<PersonIcon color='primary' />
			</IconButton>
			<Menu
				id='long-menu'
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						width: '20ch',
					},
				}}
			>
				<MenuItem component={ListOptionLink} to='/profile'>
					<ListItemIcon style={{ minWidth: 40 }}>
						<AccountCircleIcon color={'primary'} />
					</ListItemIcon>
					<ListItemText>PROFILE</ListItemText>
				</MenuItem>
				<MenuItem component={ListOptionLink} to='#' onClick={() => signOut()}>
					<ListItemIcon style={{ minWidth: 40 }}>
						<ExitToAppIcon color={'primary'} />
					</ListItemIcon>
					<ListItemText> SIGN OUT</ListItemText>
				</MenuItem>
			</Menu>
		</div>
	);
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	signOut: (values) => {
		dispatch(signOut(values));
	},
});

export default connect(null, mapDispatchToProps)(Dots);
