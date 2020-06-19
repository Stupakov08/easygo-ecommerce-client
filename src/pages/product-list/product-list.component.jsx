import React, { useEffect, useState } from 'react';
import { getList, clearList } from '../../redux/product/product.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Product from '../../components/product/product.component';
import { List, Title } from './product-list.styles';
import Pagination from '@material-ui/lab/Pagination';
const queryString = require('query-string');

const ProductListPage = ({
	getList,
	location,
	history,
	pagination: { totalCount, itemsOnPage, _start, _end },
	list,
	clearList,
	loading,
}) => {
	const [parsed, setParsed] = useState(1);
	useEffect(() => {
		const parsed = queryString.parse(location.search);

		setParsed({ _start, _end, ...parsed });
		getList({ _start, _end, ...parsed });
		return () => {
			clearList();
		};
	}, [location]);

	if (loading) return null;
	if (!loading && list.length === 0)
		return (
			<div className='checkout-page'>
				<div className='empty-list'>No product found</div>
			</div>
		);
	return (
		<>
			{parsed.q ? <Title>Results on: {parsed.q}</Title> : null}
			{!parsed.q && parsed.c ? <Title>Category: {parsed.c}</Title> : null}
			<List>
				{list.map((l) => (
					<Product key={l.id} product={l} />
				))}
			</List>
			{Math.ceil(totalCount / itemsOnPage) > 1 && (
				<Pagination
					count={Math.ceil(totalCount / itemsOnPage)}
					page={Math.ceil(_start / itemsOnPage) + 1}
					onChange={(e, p) => {
						history.push({
							pathname: '/list',
							search:
								`?` +
								queryString.stringify({
									...parsed,
									_start: itemsOnPage * (p - 1),
									_end: itemsOnPage * p,
								}),
						});
					}}
				/>
			)}
		</>
	);
};
const mapStateToProps = ({ product }) => ({
	list: product.list || [],
	pagination: product.pagination,
	loading: product.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getList: (props) => dispatch(getList(props)),
	clearList: () => dispatch(clearList()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ProductListPage));
