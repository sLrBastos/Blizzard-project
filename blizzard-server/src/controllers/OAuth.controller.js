const OAuth = require("../models/OAuth.model")


const Access_Token = (req, res) => {
    const {access_token} = req.body

    OAuth.findAccessToken(access_token)
    .then((accessToken) => {
        console.log(access_token)
        if(accessToken[0] != null && accessToken.length > 0) {
            OAuth.insertAccessToken(access_token)
            .then((res) => res.status(200).send(`Access Token sent to DB ${accessToken}`))
        } else {
            res.status(401).send("You suck")
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error sending the email");
    });
}

module.exports = {
    Access_Token
}
