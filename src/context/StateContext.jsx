import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [map, setMap] = useState(null);
  const [userPins, setUserPins] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    type: "",
  });
  const [pin, setPin] = useState({});
  const [distance, setDistance] = useState("");

  const [userLocation, setUserLocation] = useState({
    lat: 6.823504,
    long: 3.215042,
  });

  return (
    <StateContext.Provider
      value={{
        user,
        map,
        setMap,
        pin,
        setPin,
        userLocation,
        userPins,
        setUserPins,
        modal,
        setModal,
        distance,
        setDistance,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
