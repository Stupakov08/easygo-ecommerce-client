import React, { useEffect } from 'react';
import Currency from '../../components/primitives/Currency';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Page,
	Left,
	Right,
	Title,
	Description,
	Price,
	Code,
} from './pdp.styles';
import Button from '../../components/primitives/button.styles';
import Gallery from './gallery';
import { getProduct } from '../../redux/product/product.actions';
import { withRouter } from 'react-router';
const queryString = require('query-string');

const PDP = ({ product, get, match, location }) => {
	useEffect(() => {
		get(match.params.id);
	}, [match, get]);

	return (
		<Page>
			<Left>
				<Gallery images={product && product.images} />
			</Left>
			<Right>
				<Code>Code: {product && product.code}</Code>
				<Title>{product && product.title}</Title>
				<Description>{product && product.description}</Description>
				<Price>{product && Currency(product.price)}</Price>
				<Button onClick={() => {}}>Add to cart</Button>
			</Right>
		</Page>
	);
};
const mapStateToProps = ({ product }) => ({
	product: product.details,
});
const mapDispatchToProps = (dispatch) => ({
	get: (props) => dispatch(getProduct(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PDP));
