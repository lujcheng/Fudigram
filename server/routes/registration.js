const router = require('express').Router()
const { models, connectDb } = require('../../src/models')


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
      throw err
    } else {
      res.send('saved')
    }
  })
 
  // .then((err, user) => {
  //   if (err) return handleError(err)
  //   res.send(user)
  // })
})

module.exports = router;