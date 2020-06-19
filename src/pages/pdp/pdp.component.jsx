import React, { useEffect } from 'react';
import Currency from '../../components/primitives/Currency';
import { connect } from 'react-redux';
import { debounce } from 'debounce';
import {
	Page,
	Left,
	Right,
	Title,
	Description,
	Price,
	Code,
	ChipHolder,
} from './pdp.styles';
import Button from '../../components/primitives/button.styles';
import Gallery from './gallery';
import { getProduct } from '../../redux/product/product.actions';
import { addItemSync, toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router';
import Chip from '@material-ui/core/Chip';

const PDP = ({ product, get, match, addItem, loading }) => {
	useEffect(() => {
		get(match.params.id);
	}, [match, get]);

	if (loading) return null;
	if (!product)
		return (
			<Page>
				<div className='empty-list'>Product does not exist</div>
			</Page>
		);
	return (
		<Page>
			<Left>
				<Gallery images={product && product.images} />
			</Left>
			<Right>
				<Code>Code: {product && product.code}</Code>
				<Title>{product && product.title}</Title>
				<ChipHolder>
					{product &&
						product.categories.map(({ title }) => (
							<Chip variant='outlined' size='small' key={title} label={title} />
						))}
				</ChipHolder>
				<Description>{product && product.description}</Description>
				<Price>{product && Currency(product.price)}</Price>
				<Button onClick={() => addItem(product)}>Add to cart</Button>
			</Right>
		</Page>
	);
};
const mapStateToProps = ({ product }) => ({
	product: product.details,
	loading: product.loading,
});
const mapDispatchToProps = (dispatch) => ({
	get: (props) => dispatch(getProduct(props)),
	addItem: debounce(
		(item) => {
			dispatch(addItemSync(item));
			dispatch(toggleCartHidden(false));
		},
		800,
		true
	),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PDP));
