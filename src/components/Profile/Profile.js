import React from "react";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";

export default function Profile({ name, avatar, editIcon }) {
  let edit = null;
  if (editIcon) {
    edit = <span className={classes.EditIcon}>{editIcon}</span>;
  }

  return (
    <Link to={editIcon ? "/" : "/browse"}>
      <div className={classes.ProfileWrapper}>
        {edit}

        <img
          className={`${classes.Image} ${editIcon && classes.Dull}`}
          src={process.env.PUBLIC_URL + avatar}
          alt={`${name}'s image`}
        />
        <span
          className={`${classes.ProfileName} ${editIcon && classes.Bright}`}
        >
          {name}
        </span>
      </div>
    </Link>
  );
}
