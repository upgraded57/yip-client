import { useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import { getPinDistanceFromUser } from "../utils/Functions";

export default function MapInstance() {
  const { setMap, setPin, setModal, setDistance, userLocation } =
    useContext(StateContext);

  const map = useMap("map");

  useEffect(() => {
    if (!map) {
      return;
    }

    setMap(map);

    map.addListener("click", async (e) => {
      setPin({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });

      const pin = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };

      const d = getPinDistanceFromUser(pin, userLocation);

      setDistance(d);

      setModal({
        open: true,
        type: "navigator",
      });
    });
  }, [map]);

  return null;
}
