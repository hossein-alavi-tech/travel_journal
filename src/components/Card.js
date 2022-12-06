import React from "react";
import locationsign from "../images/locationsign.png";

export default function Card(props) {
  return (
    <section className="journey">
      <img
        className="journey--image"
        src={props.imageUrl}
        alt="Mount Fuji"
      />
      <div className="journey--details">
        <div className="journey--location">
          <img
            className="journey--location--sign"
            src={locationsign}
            alt="location sign"
          />
          <h4 className="journey--location--country">{props.location.toUpperCase()}</h4>
          <a className="journey--location--map" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="journey--sight">{props.title}</h1>
        <h3 className="journey--dates">{props.startDate} - {props.endDate}</h3>
        <p className="journey--text">
          {props.description}
        </p>
      </div>
    </section>
  );
}
