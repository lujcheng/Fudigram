const router = require('express').Router()
const {models, connectDb} = require('../../src/models')

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

router.route('/').get((req, res) => {
  res.send("users!")
})

router.route('/').post((req, res) => {
  console.log("new user: ", req.body)
  models.User.create(req.body).then((user) => {
    res.send(user)
  })
})

module.exports = router;