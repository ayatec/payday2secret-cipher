
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const DecryptionOutputAreaComponent = ({ text }) => {
  return (
    <Style>
      <TextArea>
        <TextAreaLeft>
          {text}
        </TextAreaLeft>
      </TextArea>
      <TextArea>
        <TextAreaRight>
          {text}
        </TextAreaRight>
      </TextArea>
      <TranslateLink
        target="_blank"
        href={`https://translate.google.com/#en/ja/${text}`}
      >
        { text.trim() ? 'Translate to Japanese' : '' }
      </TranslateLink>
    </Style>
  );
};

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
  text: PropTypes.string.isRequired,
};

// Redux
const mapStateToProps = (state) => {
  return {
    text: state.inputArea.text,
  };
};

const DecryptionOutputArea = connect(
  mapStateToProps,
)(DecryptionOutputAreaComponent);

export default DecryptionOutputArea;
