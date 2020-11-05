import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ProfileHeader from "./components/Header/Header";
import Profiles from "./pages/Profiles/Profiles";
import Browse from "./pages/Browse/Browse";

function App() {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/browse">
          <Browse />
        </Route>

        <Route path="/profiles">
          <ProfileHeader
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />
          <Profiles editProfile={editProfile} />
        </Route>

        <Route path="/">
          <ProfileHeader
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />
          <Profiles editProfile={editProfile} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
