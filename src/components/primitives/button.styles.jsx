import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CustomButtonContainer = styled(Button)`
	&& {
    color: white
		background-color: ${(props) => (props.disabled ? '#ddd' : '#000')};
    border-radius: 0px;
    margin-top: 10px;
    border: 1px solid white;
    transition: none !important;

    &:hover {
      color: black;
      border: 1px solid black;
    }
	}
`;

export default CustomButtonContainer;
