
// Import
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackspace,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare,
} from '@fortawesome/free-regular-svg-icons';

import {
  inputLineBreak,
  inputBack,
  inputSpace,
} from '../actions';

import CipherInputKey from './CipherInputKey';
import StyledInputKey from './styled/StyledInputKey';

const keyMap = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const CipherInputAreaComponent = ({
  dispatchInputSpace,
  dispatchInputBack,
  dispatchInputLineBreak,
}) => (
  <Style>
    {keyMap.map(keyRow => (
      <KeyArea key={keyRow[0]}>
        {keyRow.map(key => (
          <CipherInputKey keyCode={key} key={key} />
        ))}
      </KeyArea>
    ))}
    <OparationArea>
      <InputOparation onClick={() => dispatchInputSpace()}>
        <FontAwesomeIcon icon={faSquare} />
      </InputOparation>
      <InputOparation onClick={() => dispatchInputBack()}>
        <FontAwesomeIcon icon={faBackspace} />
      </InputOparation>
      <InputOparation onClick={() => dispatchInputLineBreak()}>
        <FontAwesomeIcon icon={faCaretDown} />
      </InputOparation>
    </OparationArea>
  </Style>
);

// Style
const Style = styled('div')`
  margin: 0 auto;
  width: 100%;
`;

const KeyArea = styled('div')`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const OparationArea = styled('div')`
  max-width: 480px;
  margin: .5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const InputOparation = styled(StyledInputKey)`
  font-size: 1.2rem;
  height: 30px;
  line-height: 29px;
  padding: .2rem .5rem 0;
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
