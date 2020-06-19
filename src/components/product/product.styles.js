import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
	width: 33%;
	box-sizing: border-box;
	padding: 20px;

	@media screen and (max-width: 639px) {
		width: 100%;
		box-sizing: border-box;
		padding: 20px;
		border-bottom: 1px solid #ececec;
		margin-bottom: 20px;
		&&:last-child {
			border-bottom: none;
		}
	}

	a,
	a:hover,
	a *,
	a:hover * {
		text-decoration: none;
		color: inherit;
	}
`;

export const AddButton = styled.div`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		opacity: 0.9;
		min-width: unset;
		padding: 0 10px;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 280px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	margin-bottom: 10px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
`;

export const NameContainer = styled.span`
	width: 100%;
	font-weight: 400;
	display: block;
	height: 38px;
	font-size: 18px;

	@media screen and (max-width: 639px) {
		font-size: 20px;
		text-align: center;
		padding-top: 5px;
	}
`;

export const PriceContainer = styled.span`
	display: block;
	font-size: 24px;
`;
export const OrderBox = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > * {
		margin-top: 10px;
	}
`;
export const AddButtonCompact = styled.div`
	width: 35px;
	height: 35px;
	background-color: black;
`;
