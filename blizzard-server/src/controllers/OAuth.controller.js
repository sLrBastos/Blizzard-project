const OAuth = require("../models/OAuth.model")


const Access_Token = (req, res) => {
    const {access_token, token_type, expires_in, sub} = req.body
    // console.log(access_token)
    // OAuth.findAccessToken(access_token)
    // console.log(first)
    const accessToken = {
            access_token: access_token,
            token_type: token_type,
            duration: expires_in,
            sub: sub
    }
    OAuth.insertAccessToken(accessToken)
        .then((results) => 
            res.status(201).json({
                message: `Access Token ${access_token} added to the database`
            })
    )
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error sending the Access Token to DB");
    });
}


const SelectAccessToken = (req, res) => {
    const {access_token} = req.body
    OAuth.findAccessToken(access_token)
        .then((results) => {
            if (results[0] != null && results.length > 0) {
                res.status(200).send("Found Access Token matching")
            } else {
                res.status(404).send("Access Token not found")
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error accessing the db.");
          });
}

module.exports = {
    Access_Token,
    SelectAccessToken
}
