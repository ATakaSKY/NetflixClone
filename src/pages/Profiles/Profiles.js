import React, { useState, useEffect } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Button from "@material-ui/core/Button";

import Profile from "../../components/Profile/Profile";
import classes from "./Profiles.module.css";

const profiles = [
  {
    id: 1,
    name: "Preeti",
    avatar: "assets/user1.png",
    editIcon: <EditOutlinedIcon style={{ fontSize: 50 }} />,
  },
  {
    id: 2,
    name: "Rashima",
    avatar: "assets/user2.png",
    editIcon: <EditOutlinedIcon style={{ fontSize: 50 }} />,
  },
  {
    id: 3,
    name: "Surbhi",
    avatar: "assets/user3.png",
    editIcon: <EditOutlinedIcon style={{ fontSize: 50 }} />,
  },
  {
    id: 4,
    name: "Trapti",
    avatar: "assets/user4.png",
    editIcon: <EditOutlinedIcon style={{ fontSize: 50 }} />,
  },
  {
    id: 5,
    name: "Aashi",
    avatar: "assets/user5.png",
    editIcon: <EditOutlinedIcon style={{ fontSize: 50 }} />,
  },
];

export default function Profiles({ editProfile }) {
  const [manageProfile, setManageProfile] = useState(editProfile || false);

  useEffect(() => {
    setManageProfile(editProfile);
  }, [editProfile]);

  return (
    <div className={classes.ProfilesWrapper}>
      <h1 className={classes.WatchText}>Who's watching?</h1>

      <div className={classes.Profiles}>
        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            avatar={profile.avatar}
            editIcon={manageProfile ? profile.editIcon : undefined}
          />
        ))}
      </div>

      <div className={classes.ManageProfilesBtn}>
        <Button
          variant="outlined"
          style={{
            border: "1px solid grey",
            color: "grey",
            marginTop: "30px",
            padding: "7px 30px 7px 30px",
            textTransform: "uppercase",
            fontSize: "1.1rem",
          }}
          onClick={() => setManageProfile(!manageProfile)}
        >
          {(manageProfile && "Done") || "Manage Profiles"}
        </Button>
      </div>
    </div>
  );
}
