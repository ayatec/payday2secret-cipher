
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StyledOutputTextArea from './styled/StyledOutputTextArea';

// Component
const CipherOutputAreaComponent = ({ text }) => {
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
    </Style>
  );
};

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
  text: PropTypes.string.isRequired,
};

// Redux
const mapStateToProps = (state) => {
  return {
    text: state.inputArea.text,
  };
};

const CipherOutputArea = connect(
  mapStateToProps,
)(CipherOutputAreaComponent);

export default CipherOutputArea;
