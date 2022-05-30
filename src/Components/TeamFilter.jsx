import React from "react";
import style from "./TeamFilter.module.css";
import comp from "../Images/companies.svg";
import { useState } from "react";
import data from "./data.json";

function Teams(props) {
  const currentFilter = {
    borderBottom: "2px solid #0083E3",
    color: "#0083E3",
  };
  const teamInfo = data.teams;

  const [team, setTeam] = useState(teamInfo);
  const [isCurrentA, setIsCurrenta] = useState(false);
  const [isCurrentB, setIsCurrentb] = useState(false);
  const [isCurrentC, setIsCurrentc] = useState(false);

  props.getFav(team);
  const allHandler = () => {
    setIsCurrenta(true);
    setIsCurrentb(false);
    setIsCurrentc(false);
    setTeam(teamInfo);
  };

  const FavHandler = () => {
    setIsCurrenta(false);
    setIsCurrentb(true);
    setIsCurrentc(false);

    const Favorites = teamInfo.filter((e) => {
      return e.is_favorited == true;
    });
    setTeam(Favorites);
  };
  const ArchHandler = () => {
    setIsCurrenta(false);
    setIsCurrentb(false);
    setIsCurrentc(true);

    const Archived = teamInfo.filter((e) => {
      return e.is_archived == true;
    });
    setTeam(Archived);
  };
  return (
    <div className={style.teams}>
      <div className={style.create_team}>
        <div className={style.comp}>
          <img src={comp} alt="" />
          <h2>Teams</h2>
        </div>
        <div className={style.btn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
              fill="white"
            />
          </svg>
          <button>CREATE NEW TEAM</button>
        </div>
      </div>
      <div className={style.teams_info}>
        <div className={style.filter_team}>
          <div style={isCurrentA ? currentFilter : {}} onClick={allHandler}>
            <h3>All</h3>
          </div>
          <div style={isCurrentB ? currentFilter : {}} onClick={FavHandler}>
            <h3>Favorites</h3>
          </div>
          <div style={isCurrentC ? currentFilter : {}} onClick={ArchHandler}>
            <h3>Archived</h3>
          </div>
        </div>
        <div className={style.search_team}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7415 10.3275L15.707 14.293L14.293 15.707L10.3275 11.7415C9.2525 12.529 7.9315 13 6.5 13C2.916 13 0 10.084 0 6.5C0 2.916 2.916 0 6.5 0C10.084 0 13 2.916 13 6.5C13 7.932 12.529 9.2525 11.7415 10.3275ZM6.5 1C3.4675 1 1 3.4675 1 6.5C1 9.5325 3.4675 12 6.5 12C9.5325 12 12 9.5325 12 6.5C12 3.4675 9.5325 1 6.5 1Z"
              fill="#999999"
            />
          </svg>
          <input type="search" placeholder="Search team name ..." />
        </div>
      </div>
    </div>
  );
}

export default Teams;
