import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import classes from "./AppHeader.module.css";

export default function AppHeader({ headerClass }) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerClass) {
      headerRef.current.classList.add(classes.NavScrolled);
    } else {
      headerRef.current.classList.remove(classes.NavScrolled);
    }
  }, [headerClass]);

  return (
    <div ref={headerRef} className={classes.AppHeaderWrapper}>
      <div className={classes.AppHeader}>
        <Link to="/browse">
          <img
            className={classes.Logo}
            src={process.env.PUBLIC_URL + "assets/netflix_logo_2.png"}
            alt="logo"
          />
        </Link>

        <div className={classes.PrimaryNavigation}>
          <ul className={classes.LinkWrapper}>
            <li className={classes.Active}>
              <Link to="/browse">Home</Link>
            </li>
            <li>
              <Link to="/browse">TV Shows</Link>
            </li>
            <li>
              <Link to="/browse">Movies</Link>
            </li>
            <li>
              <Link to="/browse">Latest</Link>
            </li>
            <li>
              <Link to="/browse">My List</Link>
            </li>
          </ul>

          <div className={classes.BrowseNavigation}>
            <button className={classes.BrowseBtn}>
              <span>Browse </span>
              <ArrowDropDownIcon style={{ fontSize: "2rem" }} />
            </button>
            <ul className={classes.BrowseLinks}>
              <li className={classes.Active}>
                <Link to="/browse">Home</Link>
              </li>
              <li>
                <Link to="/browse">TV Shows</Link>
              </li>
              <li>
                <Link to="/browse">Movies</Link>
              </li>
              <li>
                <Link to="/browse">Latest</Link>
              </li>
              <li>
                <Link to="/browse">My List</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.SecondaryNavigation}>
          <ul className={classes.LinkWrapper}>
            <li>
              <Link to="/browse">
                <SearchIcon style={{ fontSize: "1.8rem", marginRight: 4 }} />
              </Link>
            </li>
            <li>
              <Link to="/browse">
                <CardGiftcardIcon
                  style={{ fontSize: "1.8rem", marginRight: 4 }}
                />
              </Link>
            </li>
            <li>
              <Link to="/browse">
                <NotificationsIcon
                  style={{ fontSize: "1.8rem", marginRight: 4 }}
                />
              </Link>
            </li>
            <li className={classes.Profile}>
              <img
                className={classes.UserImg}
                src={process.env.PUBLIC_URL + "assets/user1.png"}
                alt="user icon"
              />
              <ArrowDropDownIcon style={{ fontSize: "1.8rem" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
