import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	padding-top: 40px;
`;

export const OrderDetail = styled.div`
	width: 100%;
	margin-top: 40px;
`;
export const Title = styled.h1`
	font-size: 48px;
	font-weight: 100;
	margin-bottom: 10px;
`;
export const SubTitle = styled.h4`
	font-size: 28px;
	font-weight: 100;
	margin: 0 0 10px 0;
`;
export const Notes = styled.div`
	font-size: 16px;
	color: grey;
`;
export const ColumnWrp = styled.div`
	display: table;
	@media screen and (max-width: 639px) {
		display: block;
	}
	width: 100%;
`;
export const Column = styled.div`
	display: table-cell;
	padding: 20px 20px 20px 0px;
	width: 50%;

	@media screen and (max-width: 639px) {
		width: 100%;
		display: block;
	}
	box-sizing: border-box;
`;
export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;
export const Row = styled.tr`
	td {
		border-bottom: 1px solid grey;
		height: 35px;
	}
	td.name {
		color: grey;
		width: 40%;
	}
`;
export const Total = styled.div`
	margin-top: 16px;
	margin-left: auto;
	font-size: 22px;
	padding-bottom: 15px;
	width: 100%;
	text-align: right;
`;
