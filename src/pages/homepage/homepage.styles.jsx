import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-start;
	align-items: center;
	flex-wrap: wrap;
	padding-top: 20px;
`;
export const Category = styled(Link)`
	width: calc(50% - 10px);
	position: relative;
	overflow: hidden;
	margin: 5px;
	box-sizing: border-box;
	color: #333;

	@media screen and (max-width: 639px) {
		width: calc(100% - 10px);
	}

	&&:hover img {
		opacity: 0.6;
	}
	&& > img {
		width: 100%;
		z-index: -1;
	}
`;
export const Title = styled.div`
	height: 100%;
	z-index: 1;
	width: 60%;
	display: flex;
	align-items: center;
	padding-left: 30px;
	font-size: 30px;
	position: absolute;
	top: 0;
	left: 0;

	@media screen and (max-width: 639px) {
		font-size: calc(9px + 4vw);
	}
`;
