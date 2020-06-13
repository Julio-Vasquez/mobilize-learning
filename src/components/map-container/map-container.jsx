import React from "react";
import { GOOGLE_API } from "./../../common/config";

export const MapContainer = () => {
  console.log(process.env);
  return (
    <div
      id="map-container"
      className="rounded z-depth-1-half map-container"
      style={{ height: "470px" }}
    >
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_-L3sh1OJI4RrcRKWYUWnwU&key=${GOOGLE_API}`}
        title="Universidad de la amazonia"
        width="99.9%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
      />
    </div>
  );
};
