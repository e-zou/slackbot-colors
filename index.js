const express = require('express')
const axios = require('axios')
const app = express() // creates express server
const port = process.env.PORT || 8080
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => { 
    let body = "It works!"
    res.send(body);
})


app.get('/get', (req, res) => { 
    let body = {
        response_type: "in_channel",
        text: "X-mode's Branding Colors",
        attachments: [
        {
            color: "#EDC560",
            pretext: "Light Yellow: #EDC560",
        },
        {
            color: "#97C6BF",
            pretext: "Leaf Green: #97C6BF",
        },
        {
            color: "#F4C137",
            pretext: "Dark Yellow: #F4C137",
        },
        {
            color: "#FFB208",
            pretext: "Light Orange: #FFB208",
        },
        {
            color: "#E98035",
            pretext: "Blood Orange: #E98035",
        },
        {
            color: "#5F8D89",
            pretext: "Dark Green: #5F8D89",
        },
        {
            color: "#518991",
            pretext: "Bluish Green: #518991",
        },
        {
            color: "#264044",
            pretext: "Super Dark Green: #264044",
        },
        {
            color: "#F0F2F6",
            pretext: "Off-White: #F0F2F6",
        }
        ]
    }

    res.send(body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/post', (req, res) => { 
    let body = {
        response_type: "in_channel",
        text: "X-mode's Branding Colors",
        attachments: [
            {
                color: "#edC560",
                text: "Light Yellow: #EDC560",
            },
            {
                color: "#97C6BF",
                text: "Leaf Green: #97C6BF",
            },
            {
                color: "#F4C137",
                text: "Dark Yellow: #F4C137",
            },
            {
                color: "#FFB208",
                text: "Light Orange: #FFB208",
            },
            {
                color: "#E98035",
                text: "Blood Orange: #E98035",
            },
            {
                color: "#5F8D89",
                text: "Dark Green: #5F8D89",
            },
            {
                color: "#518991",
                text: "Bluish Green: #518991",
            },
            {
                color: "#264044",
                text: "Super Dark Green: #264044",
            },
            {
                color: "#F0F2F6",
                text: "Off-White: #F0F2F6",
            }
        ]
    }

    res.send(body);
})