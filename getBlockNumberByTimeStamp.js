require("dotenv").config();
const axios = require("axios");

const timestamp = 1601510400;
axios({
  method: "GET",
  url: `https://api.polygonscan.com/api
    ?module=block
    &action=getblocknobytime
    &timestamp=${timestamp}
    &closest=before
    &apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
})
  .then(function (res) {
    if (res.data.message == "OK") {
      console.log(
        `The block number at timestamp ${timestamp} is ${res.data.results}`
      );
    }
  })
  .catch(function (err) {
    console.log(err);
  });
