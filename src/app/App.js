import React, { Component } from "react";
import UserCard from "../components/userCard/UserCard";
import SearchCard from "../components/searchCard/SearchCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserCard />
        <SearchCard />
      </div>
    );
  }
}

export default App;
