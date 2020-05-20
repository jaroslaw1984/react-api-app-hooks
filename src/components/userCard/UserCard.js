import React, { useContext } from "react";
import UserItem from "./userItem/UserItem";
import AppContext from "../context/resources/appContext";
import Loading from "../loading/Loading";

const UserCard = () => {
  const appContext = useContext(AppContext);

  const { isLoading, users } = appContext;

  return (
    <div className="card">
      {isLoading ? <Loading /> : users.length > 0 && <UserItem />}
    </div>
  );
};

export default UserCard;
