import "./User-Card.css";
import React from "react";


function UserCard({user}) {

const {name,age,phone,email} = user
  return (
    <div className="user-card">
      <p>first name :{name.first}</p>
      <p>last name : {name.last}</p>
      <p>age :{age}</p>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default UserCard;
