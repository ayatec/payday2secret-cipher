
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeText } from '../actions';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const DecryptionOutputAreaComponent = ({
  onChange,
  text,
}) => (
  <Style>
    <TextAreaLeft onChange={event => onChange(event)} value={text} />
    <TextAreaRight onChange={event => onChange(event)} value={text} />
    <TranslateLink
      target="_blank"
      href={`https://translate.google.com/#en/ja/${text.trim().replace(/\n/g, ' ')}`}
    >
      { text.trim() ? 'Translate to Japanese' : '' }
    </TranslateLink>
  </Style>
);

// Style
const Style = styled.div`
  display: flex;
  position: relative;
`;

const TextAreaLeft = styled(StyledOutputTextArea)`
  font-size: 1.2rem;
`;

const TextAreaRight = styled(StyledOutputTextArea)`
  font-size: 1.2rem;
  background: #ccc;
  direction: rtl;
  unicode-bidi: bidi-override;
`;

const TranslateLink = styled.a`
  padding: .5rem;
  position: absolute;
  bottom: -1.25rem;
  left: 1rem;
`;

// PropTypes
DecryptionOutputAreaComponent.propTypes = {
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

const DecryptionOutputArea = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DecryptionOutputAreaComponent);

export default DecryptionOutputArea;
