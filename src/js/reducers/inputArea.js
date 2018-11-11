
import {
  INPUT_KEY,
  INPUT_LINE_BREAK,
  INPUT_SPACE,
  INPUT_BACK,
} from '../actions';

const initialState = {
  text: '',
};

const inputArea = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_KEY:
      console.log('keyCode', action.keyCode);
      return {
        text: state.text + action.keyCode,
      };

    case INPUT_LINE_BREAK:
      console.log('line break');
      return {
        text: `${state.text}\n`,
      };

    case INPUT_SPACE:
      console.log('space');
      return {
        text: `${state.text} `,
      };

    case INPUT_BACK:
      console.log('back');
      return {
        text: state.text.slice(0, -1),
      };

    default:
      return state;
  }
};

export default inputArea;
