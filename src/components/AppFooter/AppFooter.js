import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";

import classes from "./AppFooter.module.css";

export default function AppFooter() {
  const socialLinkStyles = {
    fontSize: 35,
    marginRight: 20,
  };

  return (
    <div className={classes.AppFooter}>
      <div className={classes.SocialLinks}>
        <FacebookIcon style={socialLinkStyles} />
        <InstagramIcon style={socialLinkStyles} />
        <TwitterIcon style={socialLinkStyles} />
        <YouTubeIcon style={socialLinkStyles} />
      </div>

      <div className={classes.LinksGrid}>
        <ul>
          <li className={classes.HideXS}>Audio and Subtitles</li>
          <li className={classes.HideXS}>Audio Description</li>
          <li className={classes.HideXS}>Help Centre</li>
          <li className={classes.HideXS}>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className={classes.Service}>
        <Button
          variant="outlined"
          style={{ border: "1px solid grey", color: "grey", fontSize: ".7rem" }}
        >
          Service Code
        </Button>
      </div>

      <div className={classes.Copyright}>
        <p>© 1997-2020 Netflix, Inc.</p>
      </div>
    </div>
  );
}
