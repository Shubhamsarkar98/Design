import React from "react";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
export const SiderData = [
  {
    title: "",
    icon: <MonitorHeartIcon style={{ color: "green" }} />,
    link: "/",
  },
  {
    title: "NEW",
    icon: <AddIcon />,
    link: "/",
  },
  {
    title: "PATIENT",
    icon: <PersonOutlineIcon />,
    link: "/",
  },
  {
    title: "FOLDER",
    icon: <FilePresentIcon />,
    link: "/",
  },
  {
    title: "UPLOAD",
    icon: <FileUploadIcon />,
    link: "/",
  },
  {
    title: "REPORT",
    icon: <FolderOpenIcon />,
    link: "/",
  },
  {
    title: "SETTING",
    icon: <SettingsIcon />,
    link: "/",
  },
  {
    title: "LOGOUT",
    icon: <LogoutIcon />,
    link: "/",
  },
];
