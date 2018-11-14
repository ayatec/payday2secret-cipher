
// Import
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { inputKey } from '../actions';

import StyledInputKey from './styled/StyledInputKey';

const CipherInputKeyComponent = ({
  dispatchInputKey,
  keyCode,
}) => (
  <Style onClick={() => dispatchInputKey(keyCode)}>
    {keyCode}
  </Style>
);

// Style
const Style = styled(StyledInputKey)`
  width: 2rem;
  padding: .25rem .15rem .15rem .35rem;
  font-family: "pd-secret";

  transition: all .2s 0s ease;
  &:hover {
    font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.2rem;
    padding: .35rem .25rem .05rem .25rem;
    text-transform: uppercase;
  }
  &:active {
    font-family: "pd-secret";
    font-size: 1rem;
  }
`;

CipherInputKeyComponent.propTypes = {
  dispatchInputKey: PropTypes.func.isRequired,
  keyCode: PropTypes.string.isRequired,
};

// Redux
const mapDispatchToProps = dispatch => ({
  dispatchInputKey: keyCode => dispatch(inputKey(keyCode)),
});

const CipherInputKey = connect(
  () => ({}),
  mapDispatchToProps,
)(CipherInputKeyComponent);

export default CipherInputKey;
