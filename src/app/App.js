import React, { Component } from "react";
import UserCard from "../components/userCard/UserCard";
import SearchCard from "../components/searchCard/SearchCard";
import Footer from "../components/footer/Footer";

class App extends Component {
  state = {
    users: [],
    isloading: false,
    showCard: false,
    genderMale: true,
  };

  handleShowCard = () => {
    this.setState({
      showCard: true,
    });
  };

  async componentDidMount() {
    try {
      await fetch(
        `https://randomuser.me/api/?results=5&gender=${
          this.state.genderMale ? "female" : "male"
        }`
      )
        .then((respond) => respond.json())
        .then((data) => {
          const user = data.results;

          this.setState((prevState) => ({
            users: [...prevState.users, ...user],
          }));
        });
    } catch (error) {
      throw error(error);
    }
  }

  render() {
    const { users, isloading, genderMale, showCard } = this.state;
    console.log(users);
    return (
      <div className="container">
        {showCard && <UserCard users={users} />}
        <SearchCard click={this.handleShowCard} />
        <Footer />
      </div>
    );
  }
}

export default App;
