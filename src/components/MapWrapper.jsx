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
import { useNavigate } from "react-router-dom";

export default function MapWrapper() {
  const navigate = useNavigate();
  const { map, userPins } = useContext(StateContext);
  const [markerRef, marker] = useMarkerRef();

  const mapRef = useRef(map);

  const center = {
    lat: 6.823504,
    lng: 3.215042,
  };

  return (
    <>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <Map
          id="map"
          ref={mapRef}
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
              ></Marker>
            </>
          ))}
        </Map>
        <MapInstance />
      </APIProvider>
      {/* <div className="w-screen h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div> */}
    </>
  );
}
