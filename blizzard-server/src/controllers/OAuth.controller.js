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
        .then((results) => {

        if(results.affectedRows > 0) {
            res.status(201).json({
                message: `Access Token ${access_token} added to the database`
            })
        } else {
            res.status(401).send("NOT GOOD")
        }
            
})
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error sending the Access Token to DB");
    });
}

const SelectAccessToken = (req, res) => {
    const {access_tokenn} = req.body
    OAuth.findAccessToken(access_tokenn)
        .then((results) => {
            console.log(results[0][0].access_token)
            if (results[0][0].access_token === access_tokenn) {
                res.status(200).send("Found Access Token matching")
            } else{
                res.status(404).send("Access Token not found")
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error accessing the db.");
          });
}

const ANNIHILATE = (req, res) => {
    OAuth.deleteAccessToken()
    .then((results) => {
        if (results.affectedRows > 0) {
            res.status(200).send("DELETION COMPLETED. BASED DOT COM")
        } else {
            res.status(400).send("CRINGE. NO BUENO")
        }
    })
}

module.exports = {
    Access_Token,
    SelectAccessToken,
    ANNIHILATE
}
