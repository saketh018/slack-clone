import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import "./Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

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
      </div>
      <SidebarOption Icon={InsertCommentIcon} title={"Thread"} />
      <SidebarOption Icon={InboxIcon} title={"Mention & Reactions"} />
      <SidebarOption Icon={DraftsIcon} title={"Saved item"} />
      <SidebarOption Icon={BookmarkBorderIcon} title={"Channel Browser"} />
      <SidebarOption Icon={PeopleAltIcon} title={"People & User Group"} />
      <SidebarOption Icon={AppsIcon} title={"Apps"} />
      <SidebarOption Icon={FileCopyIcon} title={"File Browser"} />
      <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={"Channel's"} />
      <hr />
      <SidebarOption Icon={AddIcon} title={"Add channels"} />
    </div>
  );
}
export default Sidebar;
