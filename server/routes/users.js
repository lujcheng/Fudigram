const router = require('express').Router()
const {models, connectDb} = require('../../src/models')

const path = require('path')
const DIST_DIR = path.join(__dirname, '../../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


router.route('/').get((req, res) => {
  res.sendFile(HTML_FILE)
})

router.route('/').post((req, res) => {
  console.log("new user: ", req.body)
  let person
    connectDb().then(async () => {
      person = await models.User.findByLogin(`${req.body.userName}`)
      console.log(person)
      res.send(person)
      // await Promise.all([
      //   user = models.User.find({ username: req.body.userName }),
      //   console.log(user),
      //   res.send(user)
      // ]);
      app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
      );
    });
  
})

module.exports = router;