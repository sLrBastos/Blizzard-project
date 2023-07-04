const mountsRouter = require("express").Router()
const { fetchMounts } = require("../helpers/Mounts")
const { mountDatabase } = require("../controllers/Mounts.controller")


mountsRouter.get("/mount", async (req, res) => {   
    const data = await fetchMounts()
    console.log(data.mounts)
    res.json(data.mounts)
})

mountsRouter.post("/post-mount", mountDatabase)




module.exports = mountsRouter
