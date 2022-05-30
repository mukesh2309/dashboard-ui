import React from "react";
import style from "./Activity.module.css";
import julie from "../Images/julie.png";

function Activity({ name, avatar, target, action, created_at }) {
  return (
    <div className={style.activity_info}>
      <img src={avatar} width="15%" style={{ borderRadius: "50%" }} />
      <div>
        <p style={{ fontSize: "1.2rem" }}>
          {name}
          <span style={{ padding: "0 .4rem" }}>{action}</span>
          {target}
        </p>
        <span style={{ color: "#565656" }}>{created_at}</span>
      </div>
    </div>
  );
}

export default Activity;
