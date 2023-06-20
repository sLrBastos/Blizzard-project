import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CLIENT_ID = "bbdd3352857a4f75832b4c5e3d0b5774";
const CLIENT_SECRET = "10aWFwwTwouNsocO8vruhxG0RXqQhnDY";

const Oauth = () => {
  const [accessToken, setAccessToken] = useState("");

  const getAccessToken = () => {
    const options = {
      method: "post",
      url: "https://oauth.battle.net/token",
      params: {
        grant_type: "client_credentials",
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    };
    axios(options).then((res) => setAccessToken(res.data.access_token));
  };

  const getMounts = () => {
    const options = {
      method: "get",
      url: "https://eu.api.blizzard.com/data/wow/mount/index",
      params: {
        ":region": "eu",
        namespace: "static-eu",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    axios(options).then((res) => console.log(res));
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    getMounts();
  }, [accessToken]);

  return <div>Oauth</div>;
};

export default Oauth;
