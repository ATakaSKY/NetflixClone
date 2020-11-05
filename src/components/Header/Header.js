import React from "react";
import classes from "./Header.module.css";

export default function Header({ editProfile, setEditProfile }) {
  const editHandler = () => {
    setEditProfile(true);
  };

  const doneHandler = () => {
    setEditProfile(false);
  };

  let content = (
    <div className={classes.HeaderContainer}>
      <img
        className={classes.Logo}
        src={process.env.PUBLIC_URL + "assets/netflix_logo_2.png"}
        alt="logo"
      />
      <p>Who's watching</p>
      <button onClick={editHandler}>Edit</button>
    </div>
  );
  if (editProfile) {
    content = (
      <div className={classes.HeaderContainer}>
        <img
          className={classes.Logo}
          src={process.env.PUBLIC_URL + "assets/netflix_logo_2.png"}
          alt="logo"
        />
        <p>Manage Profiles</p>
        <button onClick={doneHandler}>Done</button>
      </div>
    );
  }

  return content;
}
