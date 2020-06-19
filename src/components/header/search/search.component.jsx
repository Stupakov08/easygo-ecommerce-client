import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { getList } from '../../../redux/product/product.actions';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	search: {
		position: 'relative',
		marginLeft: 0,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	searchIcon: {
		height: 'auto',
		width: '48px',
		padding: '6px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputInput: {
		padding: '6px 0px',
		transition: theme.transitions.create('width'),
		width: '0px',
		'&:focus': {
			padding: '6px',
			width: '230px',
		},
	},
}));

export const SearchAppBar = ({ history, getList }) => {
	const classes = useStyles();
	const [search, setSearch] = useState('');
	const [focus, setFocus] = useState(false);
	const ref = useRef();

	const submitForm = (e) => {
		e.preventDefault();
		if (!focus) {
			setFocus(true);
			return ref.current.focus();
		}
		if (search.trim()) {
			history.push(`/list?q=${search.trim()}`);
		}
		setFocus(false);
	};

	return (
		<form className={classes.search} onSubmit={submitForm}>
			<TextField
				placeholder='Search…'
				inputProps={{
					className: classes.inputInput,
				}}
				inputRef={ref}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className={classes.searchIcon}>
				<IconButton onClick={submitForm}>
					<SearchIcon color={'primary'} />
				</IconButton>
			</div>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getList: (props) => dispatch(getList(props)),
});

export default connect(null, mapDispatchToProps)(withRouter(SearchAppBar));
