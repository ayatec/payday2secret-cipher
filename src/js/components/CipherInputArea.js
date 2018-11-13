
// Import
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  inputLineBreak,
  inputBack,
  inputSpace,
} from '../actions';

import CipherInputKey from './CipherInputKey';

const CipherInputAreaComponent = ({ dispatch }) => {
  return (
    <Style>
      <KeyArea>
        <CipherInputKey keyCode="q" />
        <CipherInputKey keyCode="w" />
        <CipherInputKey keyCode="e" />
        <CipherInputKey keyCode="r" />
        <CipherInputKey keyCode="t" />
        <CipherInputKey keyCode="y" />
        <CipherInputKey keyCode="u" />
        <CipherInputKey keyCode="i" />
        <CipherInputKey keyCode="o" />
        <CipherInputKey keyCode="p" />
      </KeyArea>
      <KeyArea>
        <CipherInputKey keyCode="a" />
        <CipherInputKey keyCode="s" />
        <CipherInputKey keyCode="d" />
        <CipherInputKey keyCode="f" />
        <CipherInputKey keyCode="g" />
        <CipherInputKey keyCode="h" />
        <CipherInputKey keyCode="j" />
        <CipherInputKey keyCode="k" />
        <CipherInputKey keyCode="l" />
      </KeyArea>
      <KeyArea>
        <CipherInputKey keyCode="z" />
        <CipherInputKey keyCode="x" />
        <CipherInputKey keyCode="c" />
        <CipherInputKey keyCode="v" />
        <CipherInputKey keyCode="b" />
        <CipherInputKey keyCode="n" />
        <CipherInputKey keyCode="m" />
      </KeyArea>
      <OparationArea>
        <InputOparation onClick={() => dispatch(inputLineBreak())}>
          Space
        </InputOparation>
        <InputOparation onClick={() => dispatch(inputBack())}>
          ← Back
        </InputOparation>
        <InputOparation onClick={() => dispatch(inputSpace())}>
          ⏎ Line break
        </InputOparation>
      </OparationArea>
    </Style>
  );
};

// Style
const Style = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const KeyArea = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const OparationArea = styled.div`
  max-width: 480px;
  margin: .5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const InputOparation = styled.div`
  font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  height: 2rem;
  margin: .25rem;
  padding: 0.35rem .5rem 0 .5rem;
  background: #fff;
  font-size: 1.1rem;
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

// PropsTypes
CipherInputAreaComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const CipherInputArea = connect()(CipherInputAreaComponent);

export default CipherInputArea;
