import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CLIENT_ID = "bbdd3352857a4f75832b4c5e3d0b5774" 
const CLIENT_SECRET = "10aWFwwTwouNsocO8vruhxG0RXqQhnDY"


const Oauth = () => {

const [acessToken, setAccessToken] = useState("")

   const getAccessToken = () => {
        axios.post("https://oauth.battle.net/token"),
        new URLSearchParams({
            'grant_type': 'client_credentials'
          }),
          {
            auth: {
              username: CLIENT_ID,
              password: CLIENT_SECRET
            }
          }
          .then((response) => {
            setAccessToken(response.data)
          })
   }

   useEffect(() => {
    getAccessToken()
   }, [])
    
  return (
    <div>Oauth</div>


  )
}

export default Oauth