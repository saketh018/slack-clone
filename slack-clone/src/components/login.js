import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";

import { auth, provider } from "./firebase";
import "firebase/firestore";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (error) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack-logo"
        />
        <h1>Sign in to Slack</h1>
        <p>slack.com</p>
        <Button variant="outlined" color="primary" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
