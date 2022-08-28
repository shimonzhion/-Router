import "./Users.css";
import React, { useContext } from "react";
import { usersContext } from "../../../contextes/Users-Context";
import UserCard from "../../features/User-Card/User-Card";

function Users() {
  const {users} = useContext(usersContext);
  return (
    <div className="users">
      <h1>Users</h1>
      {users?.map((userItem) => 
        <UserCard user={userItem}/>
      )}
    </div>
  );
}

export default Users;
