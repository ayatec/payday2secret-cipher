
export const INPUT_KEY = 'INPUT_KEY';
export const INPUT_LINE_BREAK = 'INPUT_LINE_BREAK';
export const INPUT_SPACE = 'INPUT_Space';
export const INPUT_BACK = 'INPUT_BACK';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CHANGE_INPUT_MODE = 'CHANGE_INPUT_MODE';

export const inputKey = (keyCode) => {
  return {
    type: INPUT_KEY,
    keyCode,
  };
};

export const inputLineBreak = () => {
  return {
    type: INPUT_LINE_BREAK,
  };
};

export const inputSpace = () => {
  return {
    type: INPUT_SPACE,
  };
};

export const inputBack = () => {
  return {
    type: INPUT_BACK,
  };
};

export const changeInput = (text) => {
  return {
    type: CHANGE_INPUT,
    text,
  };
};

export const changeInputMode = (inputMode) => {
  return {
    type: CHANGE_INPUT_MODE,
    inputMode,
  };
};
