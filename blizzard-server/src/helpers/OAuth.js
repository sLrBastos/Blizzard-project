const axios = require("axios")
require("dotenv").config()


const generateAccessToken = async() => {
    const response = await axios({
        method: "post",
        url: "https://oauth.battle.net/token",
        params: {
                    grant_type: "client_credentials",
        },
        auth: {
            username: process.env.CLIENT_ID ,
            password: process.env.CLIENT_SECRET,
        },
    })
    return response.data
}


module.exports = {
    generateAccessToken,
}