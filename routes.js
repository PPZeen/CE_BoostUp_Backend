const express = require('express')
const router = express.Router()
const homeController = require('./controller/homeController')

router.get('/', (req,res) => homeController.helloHome(req,res))
router.get('/name', (req,res) => homeController.getHome(req,res))

module.exports = router