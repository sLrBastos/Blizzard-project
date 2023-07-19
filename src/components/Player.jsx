import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getPlayer } from "../reducers/GameSlice";

const PlayerMounts = () => {
  const accessToken = useSelector((state) => state.Oauth.accessToken);
  const playerMounts = useSelector((state) => state.Oauth.playerData);
  const dispatch = useDispatch();

  const fetchPlayerMounts = () => {
    //     const options = {
    //       method: "get",
    //       url: "https://eu.api.blizzard.com/profile/wow/character/{realmSlug}/{characterName}/collections/mounts",
    //       params: {
    //         ":region": "eu",
    //         "{realmSlug}": "tarren-mill",
    //         "{characterName}": "doghat",
    //         namespace: "profile-eu",
    //         locale: "en_GB",
    //       },
    //       headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     };
    //     axios(options).then((res) => dispatch(getPlayer(res.data)));
    //   };
    const options = {
      method: "get",
      url: "https://eu.api.blizzard.com/profile/wow/character/tarren-mill/doghat/collections/mounts?namespace=profile-eu&locale=en_GB&access_token=EU8Fx8TidKM8bE8f21iHgQPLDOtpDC6YG1",
    };
    axios(options).then((res) => dispatch(getPlayer(res.data)));
  };

  useEffect(() => {
    fetchPlayerMounts();
  }, [accessToken]);
  useEffect(() => {
    console.log("player", playerMounts);
  }, [playerMounts]);

  return (
    <div>
      <h1>skrhrahr</h1>
    </div>
  );
};

export default PlayerMounts;
