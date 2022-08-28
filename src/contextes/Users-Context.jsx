import { createContext, useEffect, useState } from "react";
import UsersService from "../services/users/users-services";

export const usersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(()=>{ 
    UsersService()
        .then((result) => setUsers(result))
        .catch((err) => {
          console.log(err);
        })}
   , [])

  return (
    <usersContext.Provider value={{ users, setUsers }}>
      {children}
    </usersContext.Provider>
  );
}
