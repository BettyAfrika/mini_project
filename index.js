const express = require('express')
const app = express();
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

app.get('/', async function (req, res) {
    let email = req.query.email;
    if (!email)
    return res.status(400).send('no email')

    let result = await axios.get("https://verifier.meetchopra.com/verify/"+email+"?token="+process.env.API_KEY)
    console.log(result.data)
    if (result.data.status)
    return res.send('valid email' )
    else {
        return res.send(result.data.error.message)
    }
})

app.listen(3000, () => console.log("Listening on 3000"))