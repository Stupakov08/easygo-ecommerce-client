import React from 'react';
import Currency from '../primitives/Currency';
import { Link } from 'react-router-dom';
import { debounce } from 'debounce';
import {
	CollectionItemContainer,
	CollectionFooterContainer,
	AddButtonCompact,
	BackgroundImage,
	NameContainer,
	PriceContainer,
	OrderBox,
} from './product.styles';
import Button from '../primitives/button.styles';
import {
	addItemSync,
	toggleCartHiddenTimeOut,
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const logo = require('./noimage.png');

const Product = ({ product, addItem }) => {
	const { id, title, price, images } = product;
	return (
		<CollectionItemContainer>
			<Link to={`product/${id}`}>
				<BackgroundImage
					className='image'
					imageUrl={(images && images[0] && images[0].url) || logo}
				/>
			</Link>
			<CollectionFooterContainer>
				<Link to={`product/${id}`}>
					<NameContainer>{title}</NameContainer>
				</Link>
				<OrderBox>
					<PriceContainer>{Currency(price)}</PriceContainer>
					<Button
						onClick={() => {
							addItem(product);
						}}
					>
						Add to cart
					</Button>
				</OrderBox>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: debounce(
		(item) => {
			dispatch(addItemSync(item));
			dispatch(toggleCartHiddenTimeOut(2000));
		},
		800,
		true
	),
});
export default connect(null, mapDispatchToProps)(Product);
