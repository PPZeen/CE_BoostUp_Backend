const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', routes)

app.listen(port, () => console.log(`server up and running at port ${port}`))

const {MongoClient} = require('mongodb');
const { connect } = require('./routes')
const url = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";


//create user
app.post('/users/create', async (req, res) => {
    const user = req.body

    const client = new MongoClient(url)
    await client.connect()
    await client.db('mybd').collection('user').insertOne({
        id: parseInt(user.id),
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        avatar: user.avatar
    })
    await client.close()

    res.status(200).send({
        "status": "sucsess",
        "message": `User with ID = ${user.id} is created`,
        "user": user
    })
})

//get data all users in database
app.get('/users', async (req, res) => {

    const client = new MongoClient(url)
    await client.connect()
    const users = await client.db('mybd').collection('user').find({}).toArray()
    await client.close()

    res.status(200).send(users)
})

//get data  users with id in database
app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const client = new MongoClient(url)
    await client.connect()
    const user = await client.db('mybd').collection('user').findOne({'id': id})
    await client.close()

    res.status(200).send({
        "status": "sucsess",
        "user": user
    })
})

//update data
app.put('/users/update', async (req, res) => {
    const user = req.body
    const id = user.id
    
    const client = new MongoClient(url)
    await client.connect()
    await client.db('mybd').collection('user').updateOne({'id': id}, {'$set': {
        id: parseInt(user.id),
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        avatar: user.avatar
    }})
    await client.close()

    res.status(200).send({
        "status": "sucsess",
        "message": `User with ID = ${id} is updated`,
        "user": user
    })
})

//delete user data
app.delete('/users/delete', async (req, res) => {
    const id = req.body.id
    
    const client = new MongoClient(url)
    await client.connect()
    await client.db('mybd').collection('user').deleteOne({'id': id})
    await client.close()

    res.status(200).send({
        "status": "sucsess",
        "message": `User with ID = ${id} is deleted`,
    })
})