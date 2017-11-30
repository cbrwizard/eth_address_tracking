const functions = require('firebase-functions');
const Web3 = require('web3');

exports.getPastEvents = functions.https.onRequest((req, res) => {
  console.log('in eth')
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
  const balance = web3.eth.getBalance("0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8").toString();
  console.log('balance:')
  console.log(balance)

  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
    balance is:
      ${balance}
    </body>
  </html>`);
});
