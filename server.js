const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const port = 5000;
const app = express();

global.Task = require('./api/models/userModel');
global.Task = require('./api/models/submitModel');
global.Task = require('./api/models/questionModel');

mongoose.connect(
    'mongodb://localhost/myUserAdmin',
    { useNewUrlParser: true}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', routes.userRoutes);
app.use('/', routes.submitRoutes);
app.use('/', routes.questionRoutes);

app.listen(port)
app.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
});
console.log(`server up and running at port ${port}`);