
// React
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  inputKey,
  inputLineBreak,
  inputBack,
  inputSpace,
} from '../actions';

// App
import ApplicationMain from './ApplicationMain';

const ApplicationComponent = ({ dispatch }) => {
  const handleKeyPress = (e) => {
    console.log('e.keyCode', e.keyCode);
    switch (e.keyCode) {
      case 8:
        dispatch(inputBack());
        break;

      case 13:
        dispatch(inputLineBreak());
        break;

      case 32:
        dispatch(inputSpace());
        break;

      default:
        if (44 <= e.keyCode && e.keyCode <= 90) {
          dispatch(inputKey(e.key));
        }
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  return (
    <Style>
      <Header>PAYDAY 2 Secret Cipher Decryption</Header>
      <Main>
        <ApplicationMain />
      </Main>
      <Footer>
        <FooterGroup>
          <FooterText>pd-secret font from </FooterText>
          <FooterLink
            target="_blank"
            href="https://sites.google.com/view/nanriu"
          >
            Nanriu
          </FooterLink>
        </FooterGroup>
        <FooterGroup>
          <FooterText>powered by </FooterText>
          <FooterLink
            target="_blank"
            href="https://mmra.me"
          >
            mmra.me
          </FooterLink>
        </FooterGroup>
      </Footer>
    </Style>
  );
};

// Style
const Style = styled.div`
  color: #1e3c78;
  font-weight: 900;
`;

const Header = styled.header`
  margin: 2rem;
  text-align: left;
  font-size: 2rem;
`;

const Main = styled.main`
  margin: 0 2rem;
`;

const Footer = styled.footer`
  margin: 2rem;
  text-align: right;
`;

const FooterGroup = styled.div`
`;

const FooterText = styled.span`
`;

const FooterLink = styled.a`
  text-decoration: none;
  &:link, &:visited {
    color: #F7F9FD;
    text-shadow: 1px 0 0 #1e3c78, -1px 0 0 #1e3c78, 0 2px 0 #1e3c78, 0 -1px 0 #1e3c78;
  }

  transition: all .2s 0s ease;
  &:hover {
  text-shadow: 2px 0 0 #561e78, -1px 0 0 #561e78, 0 2px 0 #561e78, 0 -1px 0 #561e78;
  }
`;

ApplicationComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const Application = connect()(ApplicationComponent);

export default Application;
