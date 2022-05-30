import React, { useState } from "react";
import style from "./Dashboard.module.css";
import Navbar from "./Navbar";
import TeamFilter from "./TeamFilter";
import Teams from "./Teams";
import data from "./data.json";

function Dashboard() {
  const [filter, setFilter] = useState(data.teams);
  const filterFav = (e) => {
    setFilter(e);
  };
  return (
    <div className={style.Dashboard_top}>
      <Navbar />
      <TeamFilter getFav={filterFav} />
      <Teams currentFilter={filter} />
    </div>
  );
}

export default Dashboard;
