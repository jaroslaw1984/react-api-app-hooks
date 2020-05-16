import React from "react";
import UserItem from "./userItem/UserItem";
import PropTypes from "prop-types";

class UserCard extends React.Component {
  state = {
    index: 0,
  };

  // check if users array is array
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  // it change and increase index of users array
  handleChangeIndexNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  // it change and decreases index of users array
  handleChangeIndexPrevius = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    return (
      <div className="card">
        <UserItem
          users={this.props.users}
          index={this.state.index}
          next={this.handleChangeIndexNext}
          previus={this.handleChangeIndexPrevius}
        />
      </div>
    );
  }
}
export default UserCard;
