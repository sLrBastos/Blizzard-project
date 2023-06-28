import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {getMounts} from "../reducers/GameSlice"

const Mounts = () => {



    const accessToken = useSelector((state) => state.Oauth.accessToken)
    const mounts = useSelector((state) => state.Oauth.mounts)
    const dispatch = useDispatch()
    

    const fetchMounts = () => {
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
        axios(options).then((res) => dispatch(getMounts(console.log(res.data))));
      };  

      useEffect(() => {
        fetchMounts();
      }, [accessToken]);
    

  return (
    <div>
        <h1>Mounts</h1>

        {mounts.map((mount) => (
           <div key={mount.id}>
            </div>
        ))}
    </div>
  )
}

export default Mounts