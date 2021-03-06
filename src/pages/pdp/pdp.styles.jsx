import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	padding-top: 40px;
	padding-bottom: 40px;

	@media screen and (max-width: 639px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Left = styled.div`
	width: 48%;
	@media screen and (max-width: 639px) {
		width: 100%;
		margin-bottom: 20px;
	}
`;
export const Right = styled.div`
	width: 52%;
	padding-left: 20px;
	box-sizing: border-box;
	@media screen and (max-width: 639px) {
		width: 100%;
	}
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
			max-width: 85%;
		}
	}
`;
export const SCarousel = styled.div`
	.slick-track {
		height: 80px;
		overflow-x: auto;
		overflow-y: hidden;
	}
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

		@media screen and (max-width: 1023px) {
			height: 60px;
			width: 60px !important;
		}

		img {
			margin: auto;
			max-height: 100%;
			max-width: 100%;
		}
	}
`;
export const Title = styled.h1`
	font-weight: 400;
	margin-top: 0;
	margin-bottom: 10px;
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
export const ChipHolder = styled.div`
	margin-bottom: 10px;
`;
