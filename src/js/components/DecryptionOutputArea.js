
// Import
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const DecryptionOutputArea = ({
  dispatchChangeText,
  dispatchChangeReverseText,
  text,
  reverseText,
}) => (
  <Style>
    <TextAreaLeft
      onChange={event => dispatchChangeText(event)}
      value={text}
    />
    <TextAreaRight
      onChange={event => dispatchChangeReverseText(event)}
      value={reverseText}
    />
    <TranslateLinkLeft
      target="_blank"
      href={`https://translate.google.com/#en/ja/${text.trim().replace(/\n/g, ' ')}`}
    >
      { text.trim() ? 'Translate to JP' : '' }
    </TranslateLinkLeft>
    <TranslateLinkRight
      target="_blank"
      href={`https://translate.google.com/#en/ja/${reverseText.trim().replace(/\n/g, ' ')}`}
    >
      { reverseText.trim() ? 'Translate to JP' : '' }
    </TranslateLinkRight>
  </Style>
);

// Style
const Style = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
`;

const TextAreaLeft = styled(StyledOutputTextArea)`
  font-size: 1.2rem;
`;

const TextAreaRight = styled(StyledOutputTextArea)`
  font-size: 1.2rem;
  background: #ccc;
`;

const TranslateLink = styled('a')`
  width: 103px;
  padding: .5rem;
  position: absolute;
  bottom: -1.1rem;
  right: 50%;
`;

const TranslateLinkLeft = styled(TranslateLink)`
  margin-right: .5rem;
  right: 50%;
`;

const TranslateLinkRight = styled(TranslateLink)`
  right: .5rem;
`;

// PropTypes
DecryptionOutputArea.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  dispatchChangeReverseText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  reverseText: PropTypes.string.isRequired,
};

export default DecryptionOutputArea;
