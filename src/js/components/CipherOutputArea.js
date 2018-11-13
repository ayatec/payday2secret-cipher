
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../actions';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const CipherOutputAreaComponent = ({
  onChange,
  text,
}) => (
  <Style>
    <TextAreaLeft onChange={event => onChange(event)} value={text} />
    <TextAreaRight onChange={event => onChange(event)} value={text} />
  </Style>
);

// Style
const Style = styled.div`
  display: flex;
`;

const TextAreaLeft = styled(StyledOutputTextArea)`
  font-family: "pd-secret";
  background: #ccc;
`;

const TextAreaRight = styled(StyledOutputTextArea)`
  font-family: "pd-secret";
  direction: rtl;
  unicode-bidi: bidi-override;
`;

// PropTypes
CipherOutputAreaComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// Redux
const mapStateToProps = (state) => {
  return {
    text: state.inputArea.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(changeText(event.target.value)),
  };
};

const CipherOutputArea = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CipherOutputAreaComponent);

export default CipherOutputArea;
