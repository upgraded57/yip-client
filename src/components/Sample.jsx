import { useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sample() {
  const { setMap, setSelectedPin, setPinSelected } = useContext(AuthContext);
  const [placeId, setPlaceId] = useState("");
  const map = useMap("map");

  useEffect(() => {
    if (!map) {
      return;
    }

    setMap(map);

    map.addListener("click", (e) => {
      const clickedLat = e.latLng.lat();
      const clickedLong = e.latLng.lng();

      setPlaceId(e.placeId || "");
      setPinSelected(true);
      setSelectedPin({
        lat: clickedLat,
        long: clickedLong,
      });
    });
  }, [map]);

  return null;
}
