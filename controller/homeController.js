async function helloHome(req, res) {
    res.send('hello world')
}

async function getHome(req, res) {
    let text = '{"statuscode": 2400, "massage": {"Name": "Prite", "Surname": "Zen", "IsagMember": false}}'
    res.send(JSON.parse(text))
}

module.exports = {helloHome, getHome}