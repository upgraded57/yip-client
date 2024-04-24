import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// map api
import {
  APIProvider,
  Map,
  Marker,
  useMap,
  useMarkerRef,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

export default function MapWrapper() {
  const { isLoaded, setPinSelected, userLocation } = useContext(AuthContext);

  const map = useMap();

  const center = {
    lat: userLocation.lat,
    lng: userLocation.long,
  };

  const [markerRef, marker] = useMarkerRef();

  const placesLibrary = useMapsLibrary("places");

  const [placesService, setPlacesService] = useState(null);

  useEffect(() => {
    if (!placesLibrary || !map) return;

    // when placesLibrary is loaded, the library can be accessed via the
    // placesLibrary API object
    setPlacesService(new placesLibrary.PlacesService(map));
  }, [placesLibrary, map]);

  useEffect(() => {
    if (!placesService) return;

    // ...use placesService...
  }, [placesService]);

  useEffect(() => {
    if (!marker) {
      return;
    }

    // do something with marker instance here
  }, [marker]);

  return (
    <>
      {isLoaded ? (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
          <Map
            style={{ width: "100vw", height: "100vh" }}
            defaultCenter={center}
            defaultZoom={15}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <Marker ref={markerRef} position={center} />
          </Map>
        </APIProvider>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}
