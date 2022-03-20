import React from "react";

function Card(props) {
  const {
    img,
    rating,
    reviewCount,
    location,
    title,
    price,
    item,
    coverImg,
    stats,
    openSpots,
  } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}

      <img src={coverImg} alt="" className="card-image" />
      <div className="card-stats">
        <img src="img/Star.png" alt="" className="card-star" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) *</span>
        <span className="gray">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
