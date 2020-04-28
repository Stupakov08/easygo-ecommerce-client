import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CustomButtonContainer = styled(Button)`
	&& {
    color: white
		background-color: ${(props) => (props.disabled ? '#ddd' : '#000')};
    border-radius: 0px;
    margin-top: 10px;
    

    &:hover {
      color: black;
    }
	}
`;

export default CustomButtonContainer;
