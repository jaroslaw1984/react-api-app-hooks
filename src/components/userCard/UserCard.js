import React, { useContext } from "react";
import UserItem from "./userItem/UserItem";
import AppContext from "../context/resources/appContext";
import Loading from "../loading/Loading";

const UserCard = () => {
  const appContext = useContext(AppContext);

  const { isLoading, users, isHeight } = appContext;

  return (
    <div
      className={isHeight ? "card--active" : "card"}
      style={isHeight ? { height: "300px" } : { height: 0 }}
    >
      {/* <div className="card"> */}
      {isLoading ? <Loading /> : users.length > 0 && <UserItem />}
    </div>
  );
};

export default UserCard;
