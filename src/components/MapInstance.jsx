import { useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/StateContext";

export default function MapInstance() {
  const { setMap, setPin, setNavigatorOpen } = useContext(StateContext);

  const map = useMap("map");

  useEffect(() => {
    if (!map) {
      return;
    }

    setMap(map);

    map.addListener("click", (e) => {
      setPin({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });

      setNavigatorOpen(true);
    });
  }, [map]);

  return null;
}
