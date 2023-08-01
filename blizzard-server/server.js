const express = require("express")
require("dotenv").config()
const cors = require("cors")
const port = process.env.APP_PORT
const { setupRoutes } = require("./src/routes/index.routes")
const server = express()
server.use(express.json())
const {generateAccessToken} = require("../blizzard-server/src/helpers/OAuth")
const { fetchPets } = require("../blizzard-server/src/helpers/Pets")

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


const main = async () => {
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const tokenEndpoint =  "https://oauth.battle.net/token"
    const apiURL = "https://eu.api.blizzard.com/data/wow/pet/index"

    try {
        const accessToken = await generateAccessToken(clientId, clientSecret, tokenEndpoint)
        const data = await fetchPets(apiURL,accessToken)
        console.log("API respomnse", data)
    } catch (error) {
        console.error("Main fuction error: ", error.message)
    }
}


main()

server.listen(port, (err) => {
    if (err) {
        console.error("Not good")
    } else {
        console.log(`Server is running Pog! Port ${port}`)
    }
})
