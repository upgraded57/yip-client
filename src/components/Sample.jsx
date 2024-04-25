import { useMap } from "@vis.gl/react-google-maps";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Sample() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
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
      setSelectedPin(e.placeId);

      console.log(e.placeId);

      const fetchPlace = async () => {
        await axios
          .get(`${baseUrl}/pins/place`, { data: { placeId: e.placeId } })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      };

      fetchPlace();
    });
  }, [map]);

  return null;
}
