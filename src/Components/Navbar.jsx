import React from "react";
import style from "./Navbar.module.css";
import data from "./data.json";

function Navbar() {
  const currentUser = data.current_user;
  return (
    <div className={style.nav}>
      <div className={style.left}>
        <h3>{currentUser.name}</h3>
      </div>
      <div className={style.right}>
        <div>
          <h3>Teams</h3>
        </div>
        <div className={style.profile}>
          <div className={style.menu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M4 11V1H20V11"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 15V23H1V15H8V18H16V15H23Z"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 6H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 10H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </g>
            </svg>
            <div className={style.count}>
              <span>{currentUser.notifications_count}</span>
            </div>
          </div>
          <div className={style.profile_name}>
            <h4>Hello,john</h4>
            <img
              src={currentUser.avatar}
              alt=""
              width="30rem"
              style={{ borderRadius: "50%" }}
            />
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.757324 0H9.24261L4.99996 4.24264L0.757324 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
