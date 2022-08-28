import { createContext, useState, useEffect } from "react";
import { devicesFetch } from "../services/deviceses/devicesFetch";

export const devicesContext = createContext();

function DevicesProvider({ children }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    devicesFetch().then((result) => setDevices(result));
  }, []);
  return (
    <devicesContext.Provider value={{ devices, setDevices }}>
      {children}
    </devicesContext.Provider>
  );
}

export default DevicesProvider;
