import React, { useState } from "react";

import CardHoverModal from "../CardHoverModal/CardHoverModal";

import classes from "./NetflixCard.module.css";

export default function NetflixCard({ detail }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.Card}>
      {showModal && <CardHoverModal imageUrl={detail.url} />}
      <div className={classes.hide}>
        <img
          // onMouseEnter={() => setShowModal(true)}
          // onMouseOut={() => setShowModal(false)}
          src={detail.url}
          alt="media image"
        />
      </div>
    </div>
  );
}
