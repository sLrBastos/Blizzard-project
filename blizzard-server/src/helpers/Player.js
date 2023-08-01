const axios = require("axios")

const fetchPlayerData = async (accessToken) => {



    const response = await axios ({
    method: "get",
    url: "https://eu.api.blizzard.com/profile/wow/character/",
    params: {
        ":region": "eu",
        "{realmSlug}": "tarren-mill",
        "{characterName}": "doghat",
        "namespace": "profile-eu",
        locale: "en_GB"
    },
    header: {
        Authorization: `Bearer ${accessToken}`,
    }
    })
    console.log(accessToken)
    return response.data
}


module.exports = {
    fetchPlayerData
}