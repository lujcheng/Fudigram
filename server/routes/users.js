const router = require('express').Router()
const {models, connectDb} = require('../models')

const path = require('path')
const DIST_DIR = path.join(__dirname, '../../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


router.route('/').get((req, res) => {
  res.sendFile(HTML_FILE)
})

router.route('/').post((req, res) => {
  console.log("new user: ", req.body)
  const userQuery = async () => {
    let person
    try {
      person = await models.User.findByLogin(`${req.body.userName}`)
      console.log(person)
      res.send(person)
    } catch (err) {
      console.log(err)
    }
  } 
  userQuery()
})

module.exports = router;