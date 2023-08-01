// const {generateAccessToken} = require("../helpers/OAuth")
// const { fetchPets } = require("./Pets")
// require("dotenv").config()


// const main = async () => {
//     const clientID = process.env.CLIENT_ID
//     const clientSecret = process.env.CLIENT_SECRET
//     const tokenEndpoint =  "https://oauth.battle.net/token"
//     const apitUrl =  "https://eu.api.blizzard.com/data/wow/pet/"

//     try {
//         const accessToken = await generateAccessToken(clientID, clientSecret, tokenEndpoint)
//         const data = await fetchPets(apitUrl, accessToken)
//         console.log("API respomnse", data)
//     } catch (error) {
//         console.error("Main fuction error: ", error.message)
//     }
// }


// main()