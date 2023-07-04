const authRouter = require("express").Router()
const { generateAccessToken } = require("../helpers/OAuth")
const OAuthController = require("../controllers/OAuth.controller")



authRouter.get("/test", async (req, res) => {
    const data = await generateAccessToken()
    console.log(data)
    res.json(data)
})

authRouter.post("/access-token", OAuthController.Access_Token)




module.exports = authRouter