import React, { useState } from "react";

import AppHeader from "../../components/AppHeader/AppHeader";
import VideoPlayback from "../../components/VideoPlayback/VideoPlayback";

import classes from "./Browse.module.css";
import NetflixCards from "../../components/NetflixCards/NetflixCards";
import AppFooter from "../../components/AppFooter/AppFooter";

export default function Browse() {
  const [headerClass, setHeaderClass] = useState(false);
  const [onCards, setOnCards] = useState(false);

  return (
    <div className={classes.BrowseContainer}>
      <div className={classes.VideoPreview}>
        <AppHeader headerClass={headerClass} />
        <VideoPlayback onCards={onCards} setHeaderClass={setHeaderClass} />
      </div>

      <div className={classes.NetflixCards}>
        <NetflixCards setOnCards={setOnCards} />
      </div>

      <div className={classes.Footer}>
        <AppFooter />
      </div>
    </div>
  );
}
