const router = require('express').Router()
const {models, connectDb} = require('../../src/models')

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

router.route('/').get((req, res) => {
  res.sendFile('../../src/components/user-input.js')
})

router.route('/').post((req, res) => {
  console.log("new user: ", req.body)
  res.send(req.body)
  models.User.create(req.body).then((user) => {
    res.send(user)
  })
})

module.exports = router;