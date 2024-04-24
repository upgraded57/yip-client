import UserInfo from "./../components/UserInfo";
import Navigator from "./../components/Navigator";
import { useContext } from "react";
import { AuthContext } from "./../context/AuthContext";
import UpdateProfile from "./../components/modals/UpdateProfile";
import CreateLocation from "../components/modals/CreateLocation";
import UpdateLocation from "../components/modals/UpdateLocation";
import MapWrapper from "../components/MapWrapper";

export default function Home() {
  const {
    pinActive,
    pinSelected,
    setPinSelected,
    profileSettingModalActive,
    createLocationModalActive,
    updateLocationModalActive,
  } = useContext(AuthContext);
  return (
    <div className="min-h-full">
      <MapWrapper />
      {!pinActive && <UserInfo />}
      {pinSelected && <Navigator />}
      {profileSettingModalActive && <UpdateProfile />}
      {createLocationModalActive && <CreateLocation />}
      {updateLocationModalActive && <UpdateLocation />}
    </div>
  );
}
