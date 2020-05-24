import styled from 'styled-components';

export const HomePageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: no-wrap;
	margin: 30px auto;
	@media screen and (max-width: 640px) {
		flex-direction: column;
		align-atems: center;
		&& > * {
			width: 100%;
		}
	}
`;
