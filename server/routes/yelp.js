const router = require('express').Router()
const yelp = require('yelp-fusion');

const apiKey = 'N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx';

const client = yelp.client(apiKey);

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

router.route('/').post((req, res) => {
  console.log(req.body)
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log("this is server search", prettyJson);
    res.send(prettyJson)
  }).catch(e => {
    console.log(e);
    res.send("couldn't find it")
  });

})
  
module.exports = router;