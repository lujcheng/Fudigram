const router = require('express').Router()

router.route('/').get((req, res) => {
  res.send("restaurants!")
})

module.exports = router;