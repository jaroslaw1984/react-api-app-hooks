import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./AppReducer";
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

const AppState = (props) => {
  const [state, dispatch] = useReducer(AppReducer, {
    users: [],
    favoriteUsers: [],
    isLoading: false,
    genderMale: true,
    isChecked: true,
    index: 0,
    rating: 0,
  });

  // it change and increase index of users array
  const handleChangeIndexNext = () => {
    dispatch({ type: SET_INCREMENT, by: 1 });
  };

  // it change and decreases index of users array
  const handleChangeIndexPrevius = () => {
    dispatch({ type: SET_DECREMENT, by: 1 });
    dispatch({ type: SET_RATE, rate: state.rating });
  };

  // changing values to search only male persons
  const handleChangeGenderMale = () => {
    dispatch({ type: SET_GENDER, to: true });
    dispatch({ type: SET_CHECKED, to: true });
  };

  // changing values to search only famale persons
  const handleChangeGenderFemale = () => {
    dispatch({ type: SET_GENDER, to: false });
    dispatch({ type: SET_CHECKED, to: false });
  };

  // set value to state how many star were pressed
  const handleSetRate = (value) => {
    dispatch({ type: SET_RATE, payload: value });
  };

  const handlePutToFavorite = (user) => {
    console.log(user);
    dispatch({ type: PUT_FAVORITE, user: [...state.favoriteUsers, user] });
  };

  // Search users
  const handleGetUsers = () => {
    // clear array users data when searching diffrent the gender and set isLoading for ture
    dispatch({ type: SET_USERS });
    dispatch({ type: SET_LOADING });

    // how many users will be fetched from api
    const numberFetchedUsers = 5;

    // objects that hold messages that will be add to fetched data
    const randomText = [
      { text: "and I would love to meet you" },
      { text: "you want to date a coffee with me" },
      { text: "maybe we will go to the cinema together ?" },
      { text: "I am looking for a person to meet together" },
      { text: "I am looking for adventure" },
      { text: "I'm looking for someone at lonely nights" },
      { text: "email me if you are lonely" },
      { text: "don't be so shy, just send me an email" },
    ];

    // feching users data from http api
    setTimeout(() => {
      try {
        fetch(
          `https://randomuser.me/api/?results=${numberFetchedUsers}&gender=${
            state.genderMale ? "male" : "female"
          }`
        )
          .then((respond) => respond.json())
          .then((data) => {
            const users = data.results;

            //on fetched data put one message to each single user
            users.forEach((user) => {
              for (let i = 0; i < numberFetchedUsers; i++) {
                const msgIndex = Math.floor(Math.random() * randomText.length);
                user.msg = randomText[msgIndex];
                user.rating = 0;
              }
            });

            // put all fetched data to state
            dispatch({
              type: SEARCH_USERS,
              payload: [...users],
            });
          });
      } catch (error) {
        throw error(error);
      }
    }, 2000);
  };

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        favoriteUsers: state.favoriteUsers,
        isLoading: state.isLoading,
        genderMale: state.genderMale,
        isChecked: state.isChecked,
        index: state.index,
        rating: state.rating,
        handleSetRate,
        handleGetUsers,
        handleChangeGenderMale,
        handleChangeGenderFemale,
        handleChangeIndexNext,
        handleChangeIndexPrevius,
        handlePutToFavorite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
