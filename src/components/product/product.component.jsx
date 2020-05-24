import React from 'react';
import Currency from '../primitives/Currency';
import { Link } from 'react-router-dom';

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

const Product = ({ product }) => {
	const { id, title, price, images } = product;
	return (
		<CollectionItemContainer>
			<Link to={`product/${id}`}>
				<BackgroundImage
					className='image'
					imageUrl={images && images[0] && images[0].url}
				/>
			</Link>
			<CollectionFooterContainer>
				<Link to={`product/${id}`}>
					<NameContainer>{title}</NameContainer>
				</Link>
				<OrderBox>
					<PriceContainer>{Currency(price)}</PriceContainer>
					<Button onClick={() => {}}>Add to cart</Button>
				</OrderBox>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};

export default Product;
