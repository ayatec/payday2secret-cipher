
// Import
import React from 'react';
import styled from 'styled-components';
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
  text,
}) => (
  <Style>
    <CipherInputArea />
    <CipherOutputArea dispatchChangeText={dispatchChangeText} text={text} />
    <DecryptionOutputArea dispatchChangeText={dispatchChangeText} text={text} />
  </Style>
);

// Style
const Style = styled.div`
`;

// PropTypes
ApplicationMainComponent.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// Redux
const mapStateToProps = state => ({
  text: state.outputArea.text,
});

const mapDispatchToProps = dispatch => ({
  dispatchChangeText: event => dispatch(changeText(event.target.value)),
});

const ApplicationMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationMainComponent);

export default ApplicationMain;
