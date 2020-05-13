import React from "react";
import UserItem from "./userItem/UserItem";
import PropTypes from "prop-types";

class UserCard extends React.Component {
  state = {
    index: 0,
  };

  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  handleChangeIndexNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

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
