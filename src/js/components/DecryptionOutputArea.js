
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
    <TranslateLink
      target="_blank"
      href={`https://translate.google.com/#en/ja/${text.trim().replace(/\n/g, ' ')}`}
    >
      { text.trim() ? 'Translate to JP' : '' }
    </TranslateLink>
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
  bottom: -1.25rem;
  right: 50%;
`;

// PropTypes
DecryptionOutputArea.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  dispatchChangeReverseText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  reverseText: PropTypes.string.isRequired,
};

export default DecryptionOutputArea;
