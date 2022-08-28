import "./Home.css";
import React from "react";
import{ useContext}from "react"
import {devicesContext} from "../../../contextes/devicesContext";

function Home() {
  const {devices,setDevices} = useContext (devicesContext)
  console.log(devices);
  return (
    <div className="home">  
      <h1>Home</h1>

      {/* <button onClick={()=>setDevices("devices")}>change</button> */}
    </div>
  );
};

export default Home;
