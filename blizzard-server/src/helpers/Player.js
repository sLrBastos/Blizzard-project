const axios = require("axios")

const fetchPlayerData = async (accessToken) => {



    const response = await axios ({
    method: "get",
    url: "https://eu.api.blizzard.com/profile/wow/character/{realmSlug}/{characterName}/collections/mounts",
    params: {
        ":region": "eu",
        "{realmSlug}": "tarren-mill",
        "{characterName}": "Doghat",
        "namespace": "profile-eu",
        locale: "en_GB"
    },
    header: {
        Authorization: `Bearer ${accessToken}`,
    }
    })

    return response.data
}


module.exports = {
    fetchPlayerData
}