import React from "react";
import TeamCard from "./TeamCard";
import style from "./Teams.module.css";
import Activity from "./Activity";
import data from "./data.json";

function Teams({ currentFilter }) {
  const activity = data.activities;
  return (
    <div className={style.teams}>
      <div className={style.all_teams}>
        <div className={style.team_heading}>
          <h3 onClick={() => setTeam(Favorites)}>All Teams</h3>
          <span>Showing 65 out of 65 teams</span>
        </div>
        <div>
          <div className={style.team_info}>
            {currentFilter.map((e, i) => {
              return (
                <TeamCard
                  image={e.image}
                  key={i}
                  camp_count={e.campaigns_count}
                  created_at={e.created_at}
                  desc={e.description}
                  lead_count={e.leads_count}
                  name={e.name}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.activity}>
        <div className={style.activity_head}>
          <h3>Activity</h3>
        </div>
        <div className={style.activity_body}>
          {activity.map((e, i) => {
            return (
              <Activity
                key={i}
                name={e.person.name}
                avatar={e.person.avatar}
                target={e.target}
                action={e.action}
                created_at={e.created_at}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teams;
