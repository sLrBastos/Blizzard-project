const axios = require("axios")
require("dotenv").config()


const generateAccessToken = async (clientId, clientSecret, tokenEndpoint) => {
    try {
     const response = await axios({
        method: "post",
        url: tokenEndpoint,
        params: {
                    grant_type: "client_credentials",
        },
        auth: {
            username: clientId,
            password: clientSecret,
        },
    })
     const accessToken = response.data.access_token
    console.log("access Token", accessToken)
    return accessToken
    } catch (error) {
        console.error("Error fetching access token: ", error.message)
        throw error
    }
   
}


     


module.exports = {
    generateAccessToken,
}