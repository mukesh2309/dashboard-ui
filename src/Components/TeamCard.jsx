import React from "react";
import style from "./TeamCard.module.css";
import melt from "../Images/meltwater.svg";

function TeamCard({ camp_count, created_at, desc, name, image, lead_count }) {
  return (
    <div className={style.card}>
      <div className={style.title}>
        <div style={{ display: "flex", columnGap: ".5rem" }}>
          <img src={image} alt="" width="30rem" />
          <div>
            <h3>{name}</h3>
            <span style={{ color: "#565656" }}>Created {created_at}</span>
          </div>
        </div>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8605 15.1543L8.00054 13.1252L4.14054 15.1543C3.41354 15.5413 2.54854 14.9193 2.68954 14.1003L3.42654 9.80125L0.302542 6.75725C-0.291458 6.17725 0.0395418 5.17025 0.857542 5.05125L5.17354 4.42425L7.10454 0.51225C7.44054 -0.17075 8.56154 -0.17075 8.89754 0.51225L10.8285 4.42325L15.1445 5.05025C15.9625 5.16925 16.2925 6.17625 15.6995 6.75625L12.5755 9.80125L13.3125 14.1003C13.4535 14.9233 12.5865 15.5363 11.8605 15.1543Z"
            fill="#F8CE43"
          />
        </svg>
      </div>
      <div className={style.about}>
        <p>{desc}</p>
      </div>
      <div style={{ display: "flex", padding: "1rem 0", columnGap: "1rem" }}>
        <div className={style.campaign}>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z"
              fill="black"
            />
          </svg>

          <span>{camp_count} campaign</span>
        </div>
        <div className={style.leads}>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z"
              fill="black"
            />
          </svg>
          <span>{lead_count} leads</span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
