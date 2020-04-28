import styled from 'styled-components';
import Input from '@material-ui/core/Input';

const CustomInput = styled(Input)`
	&& > input {
		background-color: transparent;
	}
`;

export default CustomInput;
