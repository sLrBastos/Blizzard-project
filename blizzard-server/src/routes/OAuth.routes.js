const authRouter = require("express").Router()
const { generateAccessToken } = require("../helpers/OAuth")
const OAuthController = require("../controllers/OAuth.controller")



authRouter.get("/test", async (req, res) => {   
    const data = await generateAccessToken()
    console.log(data.access_token)
    res.json(data.access_token)
})

authRouter.post("/access-token", OAuthController.Access_Token)
authRouter.get("/select-access-token", OAuthController.SelectAccessToken )
authRouter.delete("/delete-access-token", OAuthController.ANNIHILATE)


 
module.exports = authRouter