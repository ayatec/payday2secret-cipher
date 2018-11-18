
// Import
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

import StyledReverseButton from './styled/StyledReverseButton';
import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const DecryptionOutputArea = ({
  dispatchChangeText,
  dispatchChangeReverseText,
  dispatchReverseText,
  text,
  reversedText,
}) => (
  <Style>
    <TextAreaLeft
      onChange={event => dispatchChangeText(event)}
      value={text}
    />
    <StyledReverseButton
      dispatchReverseText={() => dispatchReverseText()}
    >
      <FontAwesomeIcon icon={faArrowsAltH} />
    </StyledReverseButton>
    <TextAreaRight
      onChange={event => dispatchChangeReverseText(event)}
      value={reversedText}
    />
    <TranslateLinkLeft
      target="_blank"
      href={`https://translate.google.com/#en/ja/${text.trim().replace(/\n/g, ' ')}`}
    >
      { text.trim() ? 'Translate to JP' : '' }
    </TranslateLinkLeft>
    <TranslateLinkRight
      target="_blank"
      href={`https://translate.google.com/#en/ja/${reversedText.trim().replace(/\n/g, ' ')}`}
    >
      { reversedText.trim() ? 'Translate to JP' : '' }
    </TranslateLinkRight>
  </Style>
);

// Style
const Style = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-right: 1.75rem;
  right: 50%;
`;

const TranslateLinkRight = styled(TranslateLink)`
  right: .5rem;
`;

// PropTypes
DecryptionOutputArea.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  dispatchChangeReverseText: PropTypes.func.isRequired,
  dispatchReverseText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  reversedText: PropTypes.string.isRequired,
};

export default DecryptionOutputArea;
