import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./AppReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  SET_GENDER,
  SET_CHECKED,
  SET_INDEX,
} from "../types";

const AppState = (props) => {
  const initialState = {
    users: [],
    isLoading: false,
    genderMale: true,
    isChecked: true,
    index: 0,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Search users

  // set loading

  // set gender

  // set checked

  // set index

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        genderMale: state.genderMale,
        isChecked: state.isChecked,
        index: state.index,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
