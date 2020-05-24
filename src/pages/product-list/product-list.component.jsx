import React, { useEffect, useState } from 'react';
import { getList } from '../../redux/product/product.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Product from '../../components/product/product.component';
import { List } from './product-list.styles';
import Pagination from '@material-ui/lab/Pagination';
const queryString = require('query-string');

const ProductListPage = ({ getList, location, history, totalCount, list }) => {
	const [page, setPage] = useState(1);
	useEffect(() => {
		const parsed = queryString.parse(location.search);
		getList(parsed);
	}, [location]);

	return (
		<>
			<List>{list && list.map((l) => <Product key={l.id} product={l} />)}</List>
			<Pagination
				count={(totalCount % 12) + 1}
				defaultPage={page}
				onChange={(e, p) => {}}
			/>
		</>
	);
};
const mapStateToProps = ({ product }) => ({
	list: product.list,
	totalCount: product.totalCount,
});

const mapDispatchToProps = (dispatch) => ({
	getList: (props) => dispatch(getList(props)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ProductListPage));
