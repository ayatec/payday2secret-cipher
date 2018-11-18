
import {
  INPUT_KEY,
  INPUT_LINE_BREAK,
  INPUT_SPACE,
  INPUT_BACK,
  CHANGE_TEXT,
  REVERSE_TEXT,
} from '../actions';

const initialState = {
  text: '',
};

const outputArea = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_KEY:
      return {
        text: state.text + action.keyCode,
      };

    case INPUT_LINE_BREAK:
      return {
        text: `${state.text}\n`,
      };

    case INPUT_SPACE:
      return {
        text: `${state.text} `,
      };

    case INPUT_BACK:
      return {
        text: state.text.slice(0, -1),
      };

    case CHANGE_TEXT:
      return {
        text: action.text,
      };

    case REVERSE_TEXT:
      return {
        text: state.text.split('\n').reverse().join('\n').split('').reverse().join(''),
      };

    default:
      return state;
  }
};

export default outputArea;
