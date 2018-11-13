
// Import
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { inputKey } from '../actions';

const CipherInputKeyComponent = ({ dispatch, keyCode }) => {

  return (
    <Style onClick={() => dispatch(inputKey(keyCode))}>
      {keyCode}
    </Style>
  );
};

// Style
const Style = styled.div`
  width: 2rem;
  height: 2rem;
  margin: .25rem;
  padding: .25rem .15rem .15rem .35rem;
  font-family: "pd-secret";
  font-size: 1rem;
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
    font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.2rem;
    padding: .35rem .25rem .05rem .25rem;
    background: #f8f8f8;
    border: 2px solid #666;
    border-radius: 1rem;
    text-transform: uppercase;
  }
  &:active {
    font-family: "pd-secret";
    border-radius: 1rem;
    box-shadow: 0px 0px rgba(0,0,0,0.4);
    font-size: 1rem;
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

CipherInputKeyComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  keyCode: PropTypes.string.isRequired,
};

const CipherInputKey = connect()(CipherInputKeyComponent);

export default CipherInputKey;
