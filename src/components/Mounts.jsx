import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {getMounts} from "../reducers/GameSlice"

const Mounts = () => {
    const accessToken = useSelector((state) => state.Oauth.accessToken)
    const mounts = useSelector((state) => state.Oauth.mounts)
    const dispatch = useDispatch()


    const fetchMounts = () => {
        console.log(accessToken)
        const options = {
          method: "get",
          url: "https://eu.api.blizzard.com/data/wow/mount/index",
          params: {
            locale: "en_GB",
            ":region": "eu",
            namespace: "static-eu",
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        axios(options).then((res) => dispatch(getMounts(res.data)))


      };

      useEffect(() => {
        fetchMounts();
      }, [accessToken]);
       useEffect(() => {
        console.log(mounts);
      }, [mounts]); 

  return (
    <div>
        <h1>Mounts</h1>


        {/* {mounts.map((mount) => (
           <div key={mount.id}>
            <h1>{mount.name.en_GB}</h1>
          </div>
        ))} */}
    </div>
  )
}

export default Mounts