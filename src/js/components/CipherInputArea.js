
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
import StyledInputKey from './styled/StyledInputKey';

const CipherInputAreaComponent = ({
  dispatchInputSpace,
  dispatchInputBack,
  dispatchInputLineBreak,
}) => (
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
      <InputOparation onClick={() => dispatchInputSpace()}>
        Space
      </InputOparation>
      <InputOparation onClick={() => dispatchInputBack()}>
        ← Back
      </InputOparation>
      <InputOparation onClick={() => dispatchInputLineBreak()}>
        ⏎ Line break
      </InputOparation>
    </OparationArea>
  </Style>
);

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

const InputOparation = styled(StyledInputKey)`
  padding: 0.35rem .5rem 0 .5rem;
  font-size: 1.1rem;
`;

// PropsTypes
CipherInputAreaComponent.propTypes = {
  dispatchInputSpace: PropTypes.func.isRequired,
  dispatchInputBack: PropTypes.func.isRequired,
  dispatchInputLineBreak: PropTypes.func.isRequired,
};

// Redux
const mapDispatchToProps = dispatch => ({
  dispatchInputSpace: () => dispatch(inputSpace()),
  dispatchInputBack: () => dispatch(inputBack()),
  dispatchInputLineBreak: () => dispatch(inputLineBreak()),
});

const CipherInputArea = connect(
  () => ({}),
  mapDispatchToProps,
)(CipherInputAreaComponent);

export default CipherInputArea;
