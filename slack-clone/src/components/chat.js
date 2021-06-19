import React from "react";
import "./chat.css";
import { useParams } from "react-router-dom";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>you are in {roomId}</h2>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#general</strong>
          </h4>
        </div>
        <div className="chat__headerRight"></div>
      </div>
    </div>
  );
}

export default Chat;
