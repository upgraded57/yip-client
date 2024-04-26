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
  const { setUserPins, modal } = useContext(StateContext);
  const data = useLoaderData();

  useEffect(() => {
    setUserPins(data.data.pins);
  }, []);
  return (
    <div className="min-h-full">
      <MapWrapper />
      <UserInfo />
      {modal.open && modal.type === "navigator" && <Navigator />}
      {modal.open && modal.type === "updateProfile" && <UpdateProfile />}
      {modal.open && modal.type === "createLocation" && <CreateLocation />}
      {modal.open && modal.type === "updateLocation" && <UpdateLocation />}
    </div>
  );
}
