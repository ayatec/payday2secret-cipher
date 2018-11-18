
// Import
import styled from 'react-emotion';

import StyledInputKey from './StyledInputKey';

const ReverseButton = styled(StyledInputKey)`
  height: 30px;
  line-height: 29px;
  margin: 1rem 0;
  padding: .2rem .5rem 0;
  border-width: 1px;
  border-color: rgb(169, 169, 169);
  border-radius: .5rem;
  font-size: 1.2rem;
  &:hover {
    background: #fff;
    border-width: 1px;
    border-color: rgb(169, 169, 169);
    border-radius: .5rem;
  }
`;

export default ReverseButton;
