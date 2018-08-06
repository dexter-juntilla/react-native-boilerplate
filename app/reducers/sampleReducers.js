import { USER_INPUT_CHANGE, SOME_SIDE_EFFECT } from '../actions/sampleActions';

const initialState = {
  user: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_INPUT_CHANGE:
      return {
        ...state,
        user: action.payload.user,
      };
    case SOME_SIDE_EFFECT:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
