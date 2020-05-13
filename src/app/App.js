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

  handleChangeGenderMale = () => {
    this.setState({
      genderMale: true,
      isChecked: true,
    });
  };
  handleChangeGenderFemale = () => {
    this.setState({
      genderMale: false,
      isChecked: false,
    });
  };

  handleGetUsers = () => {
    // clear array users data when changing the gender
    this.setState({ users: [] });

    try {
      fetch(
        `https://randomuser.me/api/?results=5&gender=${
          this.state.genderMale ? "male" : "female"
        }`
      )
        .then((respond) => respond.json())
        .then((data) => {
          const user = data.results;

          this.setState((prevState) => ({
            showCard: true,
            users: [...prevState.users, ...user],
          }));
        });
    } catch (error) {
      throw error(error);
    }
  };

  render() {
    const { users, isloading, isChecked } = this.state;
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
