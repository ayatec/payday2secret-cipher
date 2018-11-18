
// Import
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const CipherOutputArea = ({
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
  </Style>
);

// Style
const Style = styled('div')`
  display: flex;
  justify-content: center;
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
  text: PropTypes.string.isRequired,
  reverseText: PropTypes.string.isRequired,
};

export default CipherOutputArea;
