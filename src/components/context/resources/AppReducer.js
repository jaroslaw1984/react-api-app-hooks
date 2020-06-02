import {
  SEARCH_USERS,
  SET_USERS,
  SET_LOADING,
  SET_GENDER,
  SET_CHECKED,
  SET_INCREMENT,
  SET_DECREMENT,
  SET_RATE,
  PUT_FAVORITE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        // get users form html api
        users: action.payload,
        // do not show loading icon
        isLoading: false,
        // set the index
        index: 0,
        // clear rating if will be new search
        rating: 0,
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
        rating: 0,
      };
    case SET_DECREMENT:
      return {
        ...state,
        index: state.index - action.by,
        rating: action.rate,
      };
    case SET_GENDER:
      return {
        ...state,
        genderMale: action.to,
      };
    case PUT_FAVORITE:
      return {
        ...state,
        favoriteUsers: action.user,
      };
    default:
      return state;
  }
};
