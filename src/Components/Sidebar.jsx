import React from "react";
import styles from "./Sidebar.module.css";
import teams from "../Images/icon-teams.svg";
import logo from "../Images/sw-logo-white.svg";
import leads from "../Images/icon-leads.svg";
import reports from "../Images/icon-reports.svg";
import campaign from "../Images/icon-campaign.svg";
import help from "../Images/icon-help.svg";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_icons}>
        <div>
          <img src={logo} alt="icon-teams" />
        </div>
        <div>
          <img src={campaign} alt="icon-teams" />
        </div>
        <div style={{ backgroundColor: "#2995DA" }}>
          <img src={teams} alt="icon-teams" />
        </div>
        <div>
          <img src={leads} alt="icon-teams" />
        </div>
        <div>
          <img src={reports} alt="icon-teams" />
        </div>
      </div>
      <div className={styles.help_icon}>
        <img src={help} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
