const express = require('express')
const axios = require('axios')
const url = require('url')
var request = require('request')
const app = express() // creates express server
const port = process.env.PORT || 8080 
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
            },
            {
                text: "A digital copy of our branding guideline book from 2019",
                title: "Branding Guidelines",
                title_link: "https://drive.google.com/open?id=1oI_X2_11QBX-wnc82Tqm0zKKar4FnCNE",
                footer: "X-Mode Design"
            }
        ]
    }

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

app.post('/hr', (req, res) => {
    let query = req.body.text;
    //let parsed_url = "https://damp-beach-73016.herokuapp.com/hr/" + query;
    var parsed_url = url.format({
        pathname: 'https://localhost:8080/hr/' + query,
    });
    console.log(parsed_url);

    request(parsed_url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.send(data);
        }
    });

})

app.get('/hr/payroll', (req, res) => { 
    let body = {
        response_type: "in_channel",
        text: "Employees are paid semi-monthly for all the time worked during the last pay period.  If a new employee starts in the middle of a pay cycle, their first check will be prorated. Pay days are on the 15th and last day of the month, paid 2 weeks in arrears. Last day of the month is pay for the 1st-15th. The 15th is pay for the 16th-last day of the previous month. If a pay day falls on a weekend, then you can expect your check the Friday before.",
        
        attachments: [
            {
                color: "#edC560",
                text: "View our payroll calendar",
                title: "Payroll Calendar",
                title_link: "https://drive.google.com/open?id=1BsmOxdCi7taHBNFXKI5VhwYWnTClB01k",
                footer: "X-Mode HR"
            }
        ]
    }

    res.send(body);
})

app.get('/401k', (req, res) => { 
    let body = {
        response_type: "in_channel",
        text: "X-Mode offers a 401k plan through Voya Financial. All full-time employees are eligible to enroll on the first of the month following their first 90 days of employment.  Currently, we do not offer a match to your contributions.",
        attachments: [
            {
                color: "#edC560",
                text: "View our payroll calendar",
                title_link: "https://drive.google.com/open?id=1gOFeKxuXjNZl6rvh3Z-EqdqO0O0Edvhj",
                footer: "X-Mode HR",
            }
        ]
    }

    res.send(body);
})