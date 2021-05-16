import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import "./Sidebar.css";

import SidebarOption from "./SidebarOptions";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Saketh g</h2>
          <h3>
            <FiberManualRecordIcon />
            saketh
          </h3>
        </div>
        <CreateIcon />
        <SidebarOption Icon={InsertCommentIcon} title={"comment"} />
      </div>
    </div>
  );
}
export default Sidebar;
