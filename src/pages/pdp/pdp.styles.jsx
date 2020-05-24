import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	padding-top: 40px;
`;

export const Left = styled.div`
	width: 48%;
`;
export const Right = styled.div`
	width: 52%;
	padding-left: 20px;
	box-sizing: border-box;
`;
export const LCarousel = styled.div`
	height: 350px;
	margin: 0px 20px 40px 20px;

	.imgWpr {
		height: 350px;
		display: flex;
		img {
			margin: auto;
			max-height: 100%;
		}
	}
`;
export const SCarousel = styled.div`
	height: 80px;

	.slick-slide {
		text-align: center;
	}
	.imgWpr {
		height: 80px;
		width: 80px !important;
		border: 1px solid lightgray;
		padding: 5px;
		box-sizing: border-box;
		display: flex;

		img {
			margin: auto;
			max-height: 100%;
		}
	}
`;
export const Title = styled.h1`
	font-weight: 400;
	margin-top: 0;
`;
export const Description = styled.p`
	font-weight: 300;
	margin-top: 0;
`;
export const Price = styled.p`
	font-weight: 400;
	font-size: 24px;
	margin-top: 20px;
	margin-bottom: 10px;
`;
export const Code = styled.div`
	font-size: 12px;
	font-weight: 100;
`;
