import styled from 'styled-components';

export const HomePageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 30px auto;
	@media screen and (max-width: 640px) {
		flex-direction: column;
		&& > * {
			width: 100%;
		}
	}
`;
