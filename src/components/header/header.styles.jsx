import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 25px;
	box-sizing: border-box;
	@media screen and (max-width: 800px) {
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const HeaderBar = styled.div`
	height: 70px;
	width: 100%;
	box-shadow: 0px 1px 3px #ccc;
	@media screen and (max-width: 800px) {
		height: 60px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	margin-right: auto;
	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
	}
	& > * {
		height: 100%;
		width: 100%;
	}
`;

export const OptionsContainer = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	color: #333;
`;
export const Option = styled.div`
	cursor: pointer;
	text-decoration: none;
	color: #333;
	display: flex;
	align-items: center;
`;
export const MenuOptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	text-decoration: none;
	color: #333;
`;
export const ListOptionLink = styled(Link)`
	display: flex;
	justify-items: center;
	cursor: pointer;
	text-decoration: none;
	color: #333;
`;
