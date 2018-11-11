
// Import
import React from 'react';
import styled from 'styled-components';

// App
import CipherInputArea from './CipherInputArea';
import CipherOutputArea from './CipherOutputArea';
import DecryptionOutputArea from './DecryptionOutputArea';

// Component
const ApplicationMain = () => {
  return (
    <Style onKeyDown={() => {}}>
      <CipherInputArea />
      <CipherOutputArea />
      <DecryptionOutputArea />
    </Style>
  );
};

// Style
const Style = styled.div`
`;

export default ApplicationMain;
