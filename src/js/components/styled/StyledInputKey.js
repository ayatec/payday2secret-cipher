
// Import
import styled from 'styled-components';

const StyledInputKey = styled.div`
  height: 2rem;
  margin: .25rem;
  padding: 0.35rem .5rem 0 .5rem;
  background: #fff;
  text-align: center;
  border: 2px solid #fff;
  border-radius: .5rem;
  box-shadow: 2px 2px rgba(0,0,0,0.4);
  color: #333;
  outline: 0 !important;
  cursor: pointer;

  transition: all .2s 0s ease;
  &:hover {
    background: #f8f8f8;
    border: 2px solid #666;
    border-radius: 1rem;
  }
  &:active {
    border-radius: 1rem;
    box-shadow: 0px 0px rgba(0,0,0,0.4);
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

export default StyledInputKey;
