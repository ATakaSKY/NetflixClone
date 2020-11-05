import React, { useRef, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { usePageVisibility } from "../../hooks/usePageVisibility";

import classes from "./VideoPlayback.module.css";

export default function VideoPlayback({ setHeaderClass }) {
  const [playState, setPlayState] = useState(false);
  const headerContentRef = useRef();
  const videoRef = useRef();

  const isVisible = usePageVisibility();

  useEffect(() => {
    if (videoRef.current.readyState === 4) {
      if (playState && isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playState, isVisible]);

  useEffect(() => {
    const headerContentRefCurrent = headerContentRef.current;

    const headerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setHeaderClass("nav-scrolled");
          } else {
            setHeaderClass("");
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    if (headerContentRef && headerContentRefCurrent) {
      headerObserver.observe(headerContentRefCurrent);
    }

    return () => {
      headerObserver.unobserve(headerContentRefCurrent);
    };
  }, [headerContentRef, setHeaderClass]);

  useEffect(() => {
    const headerContentRefCurrent = headerContentRef.current;

    const headerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            setPlayState(true);
            videoRef.current.play();
          } else {
            setPlayState(false);

            videoRef.current.pause();
          }
        });
      },
      {
        // threshold: 0,
      }
    );

    if (headerContentRef && headerContentRefCurrent) {
      headerObserver.observe(headerContentRefCurrent);
    }

    return () => {
      headerObserver.unobserve(headerContentRefCurrent);
    };
  }, [headerContentRef, setHeaderClass]);

  return (
    <>
      <div className={classes.VideoPlayback}>
        <video
          ref={videoRef}
          // src="https://traversymedia.com/downloads/video.mov"
          src={`${process.env.PUBLIC_URL}/assets/st4.mp4`}
          autoPlay
          loop
          playsInline
        ></video>
      </div>

      <div ref={headerContentRef} className={classes.Content}>
        <img
          src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbQEeWUgDs57c5Emaq2hroYtvl77bV0r-ww_7rHBjczu1YSBms58FHq_Q2-liU6XYxL46t3ZMhIkzD8FkOP2fqdBMrmbxymsiQNBX1t95wdEx-pGwNeTpYigoGtW0g2IDmY7GFYcttCHwe-LKFl_O4Hm57UuKX_8FmNp4pZ4m9Ijmw.png?r=e81"
          alt="media img"
        />

        <h2>Watch season 3 now</h2>
        <p>Three prisoners are quagmires of violence and misery</p>
        <p>Two fearless journalists date to go behind bars anyway.</p>

        <div className={classes.Btn}>
          <Button
            variant="contained"
            startIcon={<PlayArrowIcon style={{ fontSize: "2rem" }} />}
            style={{
              marginRight: 10,
              padding: ".3rem 1rem .3rem 1rem",
              fontSize: "1rem",
              textTransform: "capitalize",
              background: "#fff",
              fontWeight: "bold",
            }}
          >
            Play
          </Button>

          <Button
            variant="contained"
            startIcon={<InfoOutlinedIcon style={{ fontSize: "2rem" }} />}
            style={{
              marginRight: 10,
              padding: ".3rem 1rem .3rem 1rem",
              fontSize: "1rem",
              textTransform: "capitalize",
              background: "grey",
              opacity: 0.8,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            More info
          </Button>
        </div>
      </div>
    </>
  );
}
