import UserInfo from "./../components/UserInfo";
import Navigator from "./../components/Navigator";
import { useContext, useEffect } from "react";
import { StateContext } from "../context/StateContext";
import UpdateProfile from "./../components/modals/UpdateProfile";
import CreateLocation from "../components/modals/CreateLocation";
import UpdateLocation from "../components/modals/UpdateLocation";
import MapWrapper from "../components/MapWrapper";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const { setUserPins, navigatorOpen, saveLocationModalOpen } =
    useContext(StateContext);
  const data = useLoaderData();

  useEffect(() => {
    setUserPins(data.data.pins);
  }, []);
  return (
    <div className="min-h-full">
      <MapWrapper />
      <UserInfo />
      {navigatorOpen && <Navigator />}
      {/* {profileSettingModalActive && <UpdateProfile />} */}
      {saveLocationModalOpen && <CreateLocation />}
      {/* {updateLocationModalActive && <UpdateLocation />} */}
    </div>
  );
}
