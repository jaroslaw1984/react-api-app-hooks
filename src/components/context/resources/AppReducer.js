import {
  SEARCH_USERS,
  SET_USERS,
  SET_LOADING,
  SET_GENDER,
  SET_CHECKED,
  SET_INCREMENT,
  SET_DECREMENT,
  SET_RATE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        index: 0,
      };
    case SET_RATE:
      return {
        ...state,
        rating: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: [],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CHECKED:
      return {
        ...state,
        isChecked: action.to,
      };
    case SET_INCREMENT:
      return {
        ...state,
        index: state.index + action.by,
      };
    case SET_DECREMENT:
      return {
        ...state,
        index: state.index - action.by,
      };
    case SET_GENDER:
      return {
        ...state,
        genderMale: action.to,
      };
    default:
      return state;
  }
};
