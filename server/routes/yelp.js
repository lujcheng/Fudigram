const router = require('express').Router()
const yelp = require('yelp-fusion');
require("dotenv").config();

const client = yelp.client(process.env.APIKEY);

router.route('/').post((req, res) => {
  let data = req.body.data
  console.log(data)
  client.search(data).then(response => {
    const results = response.jsonBody;
    const prettyJson = JSON.stringify(results, null, 4);
    console.log("this is server search", prettyJson);
    res.send(prettyJson)
  }).catch(e => {
    console.log(e);
    res.send("couldn't find it")
  });

})
  
module.exports = router;