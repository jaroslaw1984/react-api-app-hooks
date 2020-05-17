import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "../components/userCard/UserCard";
import SearchCard from "../components/searchCard/SearchCard";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";
import About from "../components/pages/about/About";
import Details from "../components/pages/details/Details";

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    genderMale: true,
    isChecked: true,
  };

  // changing values to search only male persons
  handleChangeGenderMale = () => {
    this.setState({
      genderMale: true,
      isChecked: true,
    });
  };

  // changing values to search only famale persons
  handleChangeGenderFemale = () => {
    this.setState({
      genderMale: false,
      isChecked: false,
    });
  };

  handleGetUsers = () => {
    // clear array users data when searching diffrent the gender and set isLoading for ture
    this.setState({ users: [], isLoading: true });

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
      { text: "call me if you are lonely" },
      { text: "don't be so shay, just call me" },
    ];

    // feching users data from http api
    setTimeout(() => {
      try {
        fetch(
          `https://randomuser.me/api/?results=${numberFetchedUsers}&gender=${
            this.state.genderMale ? "male" : "female"
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
            this.setState((prevState) => ({
              users: [...prevState.users, ...users],
              isLoading: false,
            }));
          });
      } catch (error) {
        throw error(error);
      }
    }, 2000);
  };

  render() {
    const { users, isLoading, isChecked } = this.state;

    return (
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
                    getUsers={this.handleGetUsers}
                    male={this.handleChangeGenderMale}
                    female={this.handleChangeGenderFemale}
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
    );
  }
}

export default App;
