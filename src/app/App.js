import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "../components/userCard/UserCard";
import SearchCard from "../components/searchCard/SearchCard";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";
import About from "../components/pages/about/About";
import Details from "../components/pages/details/Details";

import AppState from "../components/context/resources/AppState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genderMale, setGenderMale] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  // changing values to search only male persons
  const handleChangeGenderMale = () => {
    setGenderMale(true);
    setIsChecked(true);
  };

  // changing values to search only famale persons
  const handleChangeGenderFemale = () => {
    setGenderMale(false);
    setIsChecked(false);
  };

  const handleGetUsers = () => {
    // clear array users data when searching diffrent the gender and set isLoading for ture
    setUsers([]);
    setIsLoading(true);

    // how many users will be fetched from api
    const numberFetchedUsers = 5;

    // objects that hold messages that will be add to fetched data
    const randomText = [
      { text: "and I would love to meet you" },
      { text: "you want to date a coffee with me" },
      { text: "maybe we will go to the cinema together ?" },
      { text: "I am looking for a person to meet together" },
      { text: "I am looking for adventure" },
      { text: "I'm looking for someone for one night" },
      { text: "email me if you are lonely" },
      { text: "don't be so shy, just send me an email" },
    ];

    // feching users data from http api
    setTimeout(() => {
      try {
        fetch(
          `https://randomuser.me/api/?results=${numberFetchedUsers}&gender=${
            genderMale ? "male" : "female"
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
              }
            });

            // put all fetched data to state
            setUsers([...users]);
            setIsLoading(false);
          });
      } catch (error) {
        throw error(error);
      }
    }, 2000);
  };

  return (
    <AppState>
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    users.length > 0 && <UserCard users={users} />
                  )}
                  <SearchCard
                    getUsers={handleGetUsers}
                    male={handleChangeGenderMale}
                    female={handleChangeGenderFemale}
                    checked={isChecked}
                  />
                </Fragment>
              )}
            />
          </Switch>
          <Route path="/about" component={About} />
          <Route
            path="/details/:name"
            render={(props) => <Details {...props} users={users} />}
          />
          <Footer />
        </div>
      </Router>
    </AppState>
  );
};

export default App;
