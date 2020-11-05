import React from "react";

import classes from "./CardHoverModal.module.css";

export default function CardHoverModal({ imageUrl }) {
  return (
    <div className={classes.Modal}>
      data
      <img src={imageUrl} alt="image details" />
    </div>
  );
}
