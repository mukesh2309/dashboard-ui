import React from "react";
import style from "./Activity.module.css";

function Activity({ name, avatar, target, action, created_at }) {
  return (
    <div className={style.activity_info}>
      <img src={avatar} width="40rem" style={{ borderRadius: "50%" }} />
      <div>
        <p style={{ fontSize: "1.2rem" }}>
          {name}
          {action}
          {target}
        </p>
        <span style={{ color: "#565656" }}>{created_at}</span>
      </div>
    </div>
  );
}

export default Activity;
