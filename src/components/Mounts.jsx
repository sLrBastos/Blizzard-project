import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {getMounts} from "../reducers/GameSlice"

const Mounts = () => {



    const accessToken = useSelector((state) => state.Oauth.accessToken)
    const mounts = useSelector((state) => state.Oauth.mounts.mounts)
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
        axios(options).then((res) => console.log(dispatch(getMounts(res.data))))


      };

      useEffect(() => {
        fetchMounts();
      }, [accessToken]);


  return (
    <div>
        <h1>Mounts</h1>


        {Object.keys(mounts).map((mount) => (
           <div key={mount.id}>
            <h1>{console.log("beans", mount)}</h1>
          </div>
        ))}
    </div>
  )
}

export default Mounts