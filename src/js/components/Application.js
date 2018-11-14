
// React
import React from 'react';
import styled from 'styled-components';

// App
import ApplicationMain from './ApplicationMain';

const Application = () => (
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

// Style
const Style = styled.div`
  max-width: 1364px;
  margin: 0 auto;
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

export default Application;
