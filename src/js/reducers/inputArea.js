
import {
  INPUT_KEY,
  INPUT_LINE_BREAK,
  INPUT_SPACE,
  INPUT_BACK,
  CHANGE_TEXT,
} from '../actions';

const initialState = {
  text: '',
};

const inputArea = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default inputArea;
