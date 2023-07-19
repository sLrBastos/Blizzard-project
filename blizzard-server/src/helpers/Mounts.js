const axios = require("axios")

const fetchMounts = async (accessToken) => {
  
    const response =  await axios ({

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
    });
    // axios(options).then((res) => (res.data.mounts))
    console.log("beans", accessToken)


  };

  module.exports = {
    fetchMounts
  }