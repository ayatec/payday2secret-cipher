
// Import
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

import StyledReverseButton from './styled/StyledReverseButton';
import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const CipherOutputArea = ({
  dispatchChangeText,
  dispatchChangeReverseText,
  dispatchReverseText,
  text,
  reverseText,
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
      value={reverseText}
    />
  </Style>
);

// Style
const Style = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextAreaLeft = styled(StyledOutputTextArea)`
  font-family: "pd-secret";
  background: #ccc;
`;

const TextAreaRight = styled(StyledOutputTextArea)`
  font-family: "pd-secret";
`;

// PropTypes
CipherOutputArea.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  dispatchChangeReverseText: PropTypes.func.isRequired,
  dispatchReverseText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  reverseText: PropTypes.string.isRequired,
};

export default CipherOutputArea;
