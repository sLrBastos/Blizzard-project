const express = require("express")
require("dotenv").config()
const cors = require("cors")
const port = process.env.APP_PORT
const { setupRoutes } = require("./src/routes/index.routes")
const server = express()
server.use(express.json())


server.get("/", (req, res) => {
    res.send("Blizzard Server is running")
})


server.use(
    cors({
        "origin":"http://localhost:5173"
    })
)


// const fetchAccessToken = () => {
//     const options = {
//       method: "post",
//       url: "https://oauth.battle.net/token",
//       params: {
//         grant_type: "client_credentials",
//       },
//       auth: {
//         username: process.env.CLIENT_ID ,
//         password: process.env.CLIENT_SECRET,
//       },
//     };
//     axios(options)
//     .then((res) => {
//         console.log(res.data)
//         // return res.data
//     })
// } 

setupRoutes(server)

server.listen(port, (err) => {
    if (err) {
        console.error("Not good")
    } else {
        console.log(`Server is running Pog! Port ${port}`)
    }
})
