import React from "react";
import profile from "../assets/image/profile.png";

const ProfileSide = () => {
  return (
    <div className="profileSidebar">
      <div className="media align-items-center">
        <div className="profie_MEdia">
          <img src={profile} className="img-fluid" />
        </div>
        <div className="media-body ml-4 ">
          <h4 className="title">Mehek Shah</h4>
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <span className="viewOrders">5.9K Orders</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="ratingORders mr-1">4.6</span>
              <i className="fa-solid fa-star ratingiCons"></i>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#profile"
        data-toggle="collapse"
        aria-expanded="false"
        className="list-group-item list-group-item-action flex-column align-items-start listActive"
      >
        <div className="d-flex w-100 justify-content-start align-items-center">
          <span className="menu-collapsed">Profile</span>
          <span className="submenu-icon ml-auto" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </a>

      <a
        href="#notification"
        data-toggle="collapse"
        aria-expanded="false"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-start align-items-center">
          <span className="menu-collapsed">File</span>
          <span className="submenu-icon ml-auto" />
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </a>

      {/* <a
        href="#notification"
        data-toggle="collapse"
        aria-expanded="false"
        className="list-group-item list-group-item-action flex-column align-items-start mt-5"
        // onClick={handleClickClose}
      >
        <div className="d-flex w-100 justify-content-start align-items-center">
          <span className="menu-collapsed">Logout</span>
          <span className="submenu-icon ml-auto" />
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </a> */}
    </div>
  );
};

export default ProfileSide;
