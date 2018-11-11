
// Import
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  font-size: 1.2rem;
  font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
`;

const TextAreaRight = styled.pre`
  margin: 0;
  padding: 0;
  background: #ccc;
  font-size: 1.2rem;
  font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
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
