export const USER_INPUT_CHANGE = 'EMAIL_INPUT_CHANGE';
export const SOME_ACTION = 'SOME_ACTION';
export const SOME_SIDE_EFFECT = 'SOME_SIDE_EFFECT';

export const userInputChanged = user => ({
  type: USER_INPUT_CHANGE,
  payload: {
    user,
  },
});

export const somethingHappened = user => ({
  type: SOME_SIDE_EFFECT,
  payload: {
    user,
  },
});
