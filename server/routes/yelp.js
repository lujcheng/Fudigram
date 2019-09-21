const router = require('express').Router()
const yelp = require('yelp-fusion');
require("dotenv").config();

const apiKey = 'N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx';

const client = yelp.client(process.env.APIKEY);

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

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