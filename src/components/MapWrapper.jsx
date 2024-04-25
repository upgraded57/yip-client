import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import userLocMarker from "../assets/userLoc.svg";
import savedPin from "../assets/pin.svg";

// map api
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import Sample from "./Sample";

export default function MapWrapper() {
  const { user, isLoaded, userPins } = useContext(AuthContext);
  // const [userPins, setUserPins] = useState([]);

  const center = {
    lat: 6.823504,
    lng: 3.215042,
  };

  return (
    <>
      {isLoaded ? (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
          <Map
            id="map"
            style={{ width: "100vw", height: "100dvh" }}
            defaultCenter={center}
            defaultZoom={15}
            gestureHandling={"greedy"}
            disableDefaultUI={false}
            mapTypeControl={false}
          >
            <Marker
              position={center}
              title="Your Location"
              icon={userLocMarker}
            ></Marker>
            {userPins?.map((pin) => (
              <Marker
                key={pin.id}
                position={{ lat: pin.lat, lng: pin.long }}
                title={pin.title}
                icon={savedPin}
              ></Marker>
            ))}
          </Map>
          <Sample />
        </APIProvider>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}
