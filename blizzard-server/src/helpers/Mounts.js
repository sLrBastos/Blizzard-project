const axios = require("axios")
require("dotenv").config()

const fetchMounts = async () => {

    const response =  await axios ({
      method: "get",
      url: "https://eu.api.blizzard.com/data/wow/mount/index",
      params: {
        locale: "en_GB",
        ":region": "eu",
        namespace: "static-eu",
      },
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    // axios(options).then((res) => (res.data.mounts))
    return response.data


  };

  module.exports = {
    fetchMounts
  }