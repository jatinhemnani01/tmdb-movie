import React from "react";
import "./Card.css";
const Card = ({ title, release_date, img_url, overview }) => {
  return (
    <div className="card">
      <img src={img_url} alt={title} />
      <div className="title">{title}</div>
      <br />
      <div className="release_date">{release_date}</div>
      <div className="overview">{overview}</div>
    </div>
  );
};

export default Card;
