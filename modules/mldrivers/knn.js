const axios = require('axios')
const Driver = require('./driver')
const url1 = 'http://localhost:33508/knntweet'
 const url2 = 'http://localhost:33508/knnuser'


class   KNNAdapter extends Driver{
  async predict(tweet) {
    // Write code to predict or label a tweet based on user, text, etc...
    let res1 = await axios.post(url1, {
       'tweet': tweet.text
     }).then(function (response1){
        // response = JSON.parse(response)
       return response1.data
     }).catch(err => {
      // console.log('error:', err);
    });

    let res2 = await axios.post(url2, {
       'user_description':tweet.user.description
     }).then(function (response2){
       // response2 = JSON.parse(response)
       return response2.data
     }).catch(err => {
      // console.log('error:', err);
    });

    

     var res = {
      "theme":res1["theme"],
      "group":res2["group"],
     }
     console.log(res)
    return res
  }
}

module.exports = KNNAdapter

