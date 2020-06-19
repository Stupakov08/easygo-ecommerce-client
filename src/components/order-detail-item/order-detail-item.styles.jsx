import styled from 'styled-components';

export const Row = styled.tr`
	td {
		border-bottom: 1px solid grey;
		.img {
			height: 80px;
			display: flex;
			width: 100px;

			img {
				max-height: 100%;
				margin: auto;
			}
		}
	}
	.tdimg {
		width: 100px;
		padding: 5px;
	}
	.name {
		font-size: 16px;
		color: inherit;
		text-decoration: none;
	}
`;
