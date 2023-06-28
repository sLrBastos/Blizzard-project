import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../reducers/GameSlice";



const CLIENT_ID = "bbdd3352857a4f75832b4c5e3d0b5774";
const CLIENT_SECRET = "10aWFwwTwouNsocO8vruhxG0RXqQhnDY";

const Oauth = () => {
  // const [accessToken, setAccessToken] = useState("");

  const dispatch = useDispatch()

  const fetchAccessToken = () => {
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
    axios(options).then((res) => dispatch(getAccessToken(console.log(res.data.access_token))));

  };
  

  

  useEffect(() => {
    fetchAccessToken();
  }, []);


  return <div>Oauth</div>;
};

export default Oauth;
