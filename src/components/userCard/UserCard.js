import React from "react";
import UserItem from "./userItem/UserItem";

class UserCard extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndexUp = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  handleChangeIndexDown = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    const { users } = this.props;
    const { index } = this.state;

    return (
      <div className="card">
        <img src={users[index].picture.large} alt={users[index].name.first} />
        <p>
          {users[index].name.first} {users[index].name.last}
        </p>
        {/* {users.map((user) => (
        <UserItem key={user.login.salt} user={user} />
      ))} */}
        <button onClick={this.handleChangeIndexUp}>Next</button>
        <button onClick={this.handleChangeIndexDown}>Previus</button>
      </div>
    );
  }
}
export default UserCard;
