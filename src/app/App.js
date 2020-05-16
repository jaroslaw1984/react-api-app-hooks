import React, { Component } from "react";
import UserCard from "../components/userCard/UserCard";
import SearchCard from "../components/searchCard/SearchCard";
import Footer from "../components/footer/Footer";

class App extends Component {
  state = {
    users: [],
    isloading: false,
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
    // clear array users data when changing the gender
    this.setState({ users: [] });

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
    try {
      fetch(
        `https://randomuser.me/api/?results=5&gender=${
          this.state.genderMale ? "male" : "female"
        }`
      )
        .then((respond) => respond.json())
        .then((data) => {
          const users = data.results;

          //on fetched data put one message to each single user
          users.forEach((user) => {
            for (let i = 0; i < 5; i++) {
              const msgIndex = Math.floor(Math.random() * randomText.length);
              user.msg = randomText[msgIndex];
            }
          });

          // put all fetched data to state
          this.setState((prevState) => ({
            users: [...prevState.users, ...users],
          }));
        });
    } catch (error) {
      throw error(error);
    }
  };

  render() {
    const { users, isloading, isChecked } = this.state;
    console.log(4);
    return (
      <div className="container">
        {users.length > 0 && <UserCard users={users} />}
        <SearchCard
          getUsers={this.handleGetUsers}
          male={this.handleChangeGenderMale}
          female={this.handleChangeGenderFemale}
          checked={isChecked}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
