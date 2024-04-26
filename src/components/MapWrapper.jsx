import { useContext, useRef, useState } from "react";
import { StateContext } from "../context/StateContext";
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
import MapInstance from "./MapInstance";

export default function MapWrapper() {
  const { userPins, setPin, setModal } = useContext(StateContext);
  const [markerRef, marker] = useMarkerRef();

  const center = {
    lat: 6.823504,
    lng: 3.215042,
  };

  const showPinInfo = (pin) => {
    const lng = pin.long;
    setPin({ ...pin, lng });
    setModal({
      open: true,
      type: "navigator",
    });
  };

  return (
    <>
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
            ref={markerRef}
          ></Marker>
          <InfoWindow anchor={marker}>
            <div>
              <p className="text-sm font-semibold">Your Location</p>
            </div>
          </InfoWindow>
          {userPins?.map((pin) => (
            <>
              <Marker
                key={pin._id}
                position={{ lat: pin.lat, lng: pin.long }}
                title={pin.title}
                icon={savedPin}
                onClick={() => showPinInfo(pin)}
              ></Marker>
            </>
          ))}
        </Map>
        <MapInstance />
      </APIProvider>
    </>
  );
}
