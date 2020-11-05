import React, { useRef } from "react";
import NetflixCard from "../NetflixCard/NetflixCard";

import { netflixOriginals, continueWatching, trending } from "../../db/data";
import classes from "./Netflix.module.css";

export default function NetflixCards() {
  const cardRef = useRef(null);

  return (
    <div className={classes.NetflixMediaContent} ref={cardRef}>
      <div className={classes.MediaRow}>
        <h2>Continue Watching</h2>
        <div className={classes.CardGrid}>
          {continueWatching.map((detail) => (
            <img
              // onMouseEnter={() => setShowModal(true)}
              // onMouseOut={() => setShowModal(false)}
              key={detail.title}
              src={detail.url}
              alt="media image"
            />
            // <NetflixCard key={detail.title} detail={detail} />
          ))}
        </div>
      </div>

      <div className={classes.MediaRow}>
        <h2>Netflix Originals</h2>
        <div className={classes.CardGrid}>
          {netflixOriginals.map((detail) => (
            <img
              // onMouseEnter={() => setShowModal(true)}
              // onMouseOut={() => setShowModal(false)}
              key={detail.title}
              src={detail.url}
              alt="media image"
            />
            // <NetflixCard key={detail.title} detail={detail} />
          ))}
        </div>
      </div>

      <div className={classes.MediaRow}>
        <h2>Popular on Netflix</h2>
        <div className={classes.CardGrid}>
          {trending.map((detail) => (
            <img
              // onMouseEnter={() => setShowModal(true)}
              // onMouseOut={() => setShowModal(false)}
              key={detail.title}
              src={detail.url}
              alt="media image"
            />
            // <NetflixCard key={detail.title} detail={detail} />
          ))}
        </div>
      </div>
    </div>
  );
}
