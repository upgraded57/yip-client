import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const [userLocation, setUserLocation] = useState({ lat: 0, long: 0 });
  const [pinActive, setPinActive] = useState(false);
  const [pinSelected, setPinSelected] = useState(false);
  const [selectedPin, setSelectedPin] = useState("");
  const [pinDetailsExpanded, setPinDetailsExpanded] = useState(false);
  const [profileSettingModalActive, setProfileSettingModalActive] =
    useState(false);
  const [createLocationModalActive, setCreateLocationModalActive] =
    useState(false);
  const [updateLocationModalActive, setUpdateLocationModalActive] =
    useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const openPinDetails = () => {
    setPinDetailsExpanded(true);
    setPinActive(true);
  };

  const closePinDetails = () => {
    setPinDetailsExpanded(false);
    setPinActive(false);
  };

  const openModal = () => {
    setPinActive(true);
    setPinSelected(false);
  };

  const closeModal = () => {
    setPinSelected(true);
  };

  // get user location
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    setUserLocation({
      lat: crd.latitude,
      long: crd.longitude,
    });

    setIsLoaded(true);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    // confirm("Unable to fetch current location");
    setUserLocation({
      lat: 6.81491,
      long: 3.19518,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userLocation,
        pinActive,
        isLoaded,
        setPinActive,
        selectedPin,
        setSelectedPin,
        pinSelected,
        setPinSelected,
        openModal,
        closeModal,
        pinDetailsExpanded,
        setPinDetailsExpanded,
        openPinDetails,
        closePinDetails,
        profileSettingModalActive,
        setProfileSettingModalActive,
        createLocationModalActive,
        setCreateLocationModalActive,
        updateLocationModalActive,
        setUpdateLocationModalActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
