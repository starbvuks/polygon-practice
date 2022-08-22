require("dotenv").config();
const axios = require("axios");

const txHash =
  "0x591ca00bf6b404e24e21732023abc0416673beff9586f37e61fb0f07ca560940";
axios({
  method: "get",
  url: `https://api.polygonscan.com/api
    ?module=transaction
    &action=gettxreceiptstatus
    &txhash=${txHash}
    &apikey=${process.env.POLYGONSCAN_API_KEY}`,
  responseType: "json",
})
  .then(function (res) {
    if (res.data.message == "OK") {
      console.log(
        `transaciton status reciept status of ${txHash} is ${(res.data.result.status =
          1 ? `success` : `fail`)}`
      );
    }
  })
  .catch(function (err) {
    console.log(err);
  });
