
// Import
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// App
import CipherInputArea from './CipherInputArea';
import CipherOutputArea from './CipherOutputArea';
import DecryptionOutputArea from './DecryptionOutputArea';

// Action
import {
  changeText,
} from '../actions';

// Component
const ApplicationMainComponent = ({
  dispatchChangeText,
  dispatchChangeReverseText,
  text,
  reversedText,
}) => (
  <Style>
    <CipherInputArea />
    <CipherOutputArea
      dispatchChangeText={dispatchChangeText}
      dispatchChangeReverseText={dispatchChangeReverseText}
      text={text}
      reversedText={reversedText}
    />
    <DecryptionOutputArea
      dispatchChangeText={dispatchChangeText}
      dispatchChangeReverseText={dispatchChangeReverseText}
      text={text}
      reversedText={reversedText}
    />
  </Style>
);

// Style
const Style = styled('div')`
`;

// PropTypes
ApplicationMainComponent.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  dispatchChangeReverseText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  reversedText: PropTypes.string.isRequired,
};

// Redux
const mapStateToProps = state => ({
  text: state.outputArea.text,
  reversedText: state.outputArea.text.split('\n').reverse().join('\n').split('').reverse().join(''),
});

const mapDispatchToProps = dispatch => ({
  dispatchChangeText: event => dispatch(changeText(event.target.value)),
  dispatchChangeReverseText: event => dispatch(changeText(event.target.value.split('\n').reverse().join('\n').split('').reverse().join(''))),
});

const ApplicationMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationMainComponent);

export default ApplicationMain;
