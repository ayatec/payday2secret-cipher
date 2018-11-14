
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const CipherOutputArea = ({
  dispatchChangeText,
  text,
}) => (
  <Style>
    <TextAreaLeft onChange={event => dispatchChangeText(event)} value={text} />
    <TextAreaRight onChange={event => dispatchChangeText(event)} value={text} />
  </Style>
);

// Style
const Style = styled.div`
  display: flex;
  justify-content: center;
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
CipherOutputArea.propTypes = {
  dispatchChangeText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CipherOutputArea;
