import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// map api
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import Sample from "./Sample";

export default function MapWrapper() {
  const { isLoaded, setPinSelected, userLocation } = useContext(AuthContext);

  // const center = {
  //   lat: userLocation.lat,
  //   lng: userLocation.long,
  // };

  const center = {
    lat: 6.823504,
    lng: 3.215042,
  };

  const [markerRef, marker] = useMarkerRef();

  return (
    <>
      {isLoaded ? (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
          <Map
            id="map"
            style={{ width: "100vw", height: "100vh" }}
            defaultCenter={center}
            defaultZoom={15}
            gestureHandling={"greedy"}
            disableDefaultUI={false}
            mapTypeControl={false}
          >
            <Marker ref={markerRef} position={center}></Marker>
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
