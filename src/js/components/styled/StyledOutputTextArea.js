
// Import
import Textarea from 'react-textarea-autosize';
import styled from 'styled-components';

const StyledOutputTextArea = styled(Textarea)`
  font-family: 'ProximaSoft-Regular', 'Noto Sans Japanese', -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-weight: bold;
  width: 50%;
  max-width: 640px;
  min-height: 1.7rem;
  height: auto;
  margin: 1rem;
  padding-top: .25rem;
  border-radius: .5rem;
  text-align: center;
  overflow: auto;
  color: #1e3c78;
  background: #fff;
  box-shadow: 2px 2px rgba(0,0,0,0.4);
  resize: none;
  outline: 0 !important;
  cursor: pointer;
`;

export default StyledOutputTextArea;
