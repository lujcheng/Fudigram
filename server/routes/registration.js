const router = require('express').Router()
const { models, connectDb } = require('../models')


const path = require('path')
const DIST_DIR = path.join(__dirname, '../../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


router.route('/').get((req, res) => {
  res.sendFile(HTML_FILE)
})

router.route('/').post((req, res) => {
  console.log("new user: ", req.body)
  res.send(req.body.userName)
  let user = new models.User({username: req.body.userName})
  user.save(err => {
    if (err) { 
      return handleError(err)
    } else {
      console.log("saved user")
    }
  })
})

module.exports = router;