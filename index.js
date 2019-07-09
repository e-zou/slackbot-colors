const express = require('express')
const axios = require('axios')
const app = express() // creates express server
const port = 3000
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
            pretext: "Light Yellow",
        },
        {
            color: "#97C6BF",
            pretext: "Leaf Green",
        },
        {
            color: "#F4C137",
            pretext: "Dark Yellow",
        },
        {
            color: "#FFB208",
            pretext: "Light Orange",
        },
        {
            color: "#E98035",
            pretext: "Blood Orange",
        },
        {
            color: "#5F8D89",
            pretext: "Dark Green",
        },
        {
            color: "#518991",
            pretext: "Bluish Green",
        },
        {
            color: "#264044",
            pretext: "Super Dark Green",
        },
        {
            color: "#F0F2F6",
            pretext: "Off-White",
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
            color: "#EDC560",
            pretext: "Light Yellow",
        },
        {
            color: "#97C6BF",
            pretext: "Leaf Green",
        },
        {
            color: "#F4C137",
            pretext: "Dark Yellow",
        },
        {
            color: "#FFB208",
            pretext: "Light Orange",
        },
        {
            color: "#E98035",
            pretext: "Blood Orange",
        },
        {
            color: "#5F8D89",
            pretext: "Dark Green",
        },
        {
            color: "#518991",
            pretext: "Bluish Green",
        },
        {
            color: "#264044",
            pretext: "Super Dark Green",
        },
        {
            color: "#F0F2F6",
            pretext: "Off-White",
        }
        ]
    }

    res.send(body);
})