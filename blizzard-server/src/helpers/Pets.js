const axios = require("axios")


const fetchPets = async (apiURL, accessToken) => { 

    console.log("YEP", accessToken)
     const response = await axios ({
        method: "get",
        url: "https://eu.api.blizzard.com/data/wow/pet/index?namespace=static-eu&locale=en_GB&access_token=EUoYO8kqG4srQl2svMFK5DUfgt1bGCxayw",
        params: {
            ":region": "eu",
            "namespace": "static-eu",
            locale: "en_GB"
        },

        header :{
            Authorization: `Bearer ${accessToken}`,
        }
    }) 
    return response.data   
}



module.exports = {
    fetchPets
}