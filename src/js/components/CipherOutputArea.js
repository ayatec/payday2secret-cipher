
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const TextArea = styled.div`
  margin: 1rem;
  width: 50%;
  min-height: 1.7rem;
  border-radius: .5rem;
  text-align: center;
  overflow: auto;
  background: #fff;
  box-shadow: 2px 2px rgba(0,0,0,0.4);
`;

const TextAreaLeft = styled.pre`
  margin: 0;
  padding: 0;
  font-family: "pd-secret";
  background: #ccc;
`;

const TextAreaRight = styled.pre`
  margin: 0;
  padding: 0;
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
