import React from "react";
import { SiderData } from "./SiderData";

const Sider = () => {
  return (
    <div className="sidebar">
      <ul className="SiderList">
        {SiderData.map((cur, ind) => {
          return (
            <li
              key={ind}
              onClick={() => (window.location.pathname = cur.link)}
              className="row"
            >
              <div>{cur.icon}</div>
              <div>{cur.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sider;
