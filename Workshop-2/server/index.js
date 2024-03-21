const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));

//routes
app.get('/tipocambio', async function (req, res) {

  var myHeaders = new Headers();
  myHeaders.append("apikey", "REK6cemgPtaLNYfUWR4ciowAn0DEHSmW");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  let currency = req.query.currency;

  try {
    let exchange = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currency}&from=USD&amount=1`, requestOptions);
    exchange = JSON.parse(await exchange.text());
    
    console.log(exchange,typeof exchange);

    response = {
      currency,
      exchange: exchange.error ? 'desconocido' : exchange.result
    }

  } catch (error) {
    response = {
      currency,
      exchange: 'desconocido'
    }
  }

  res.json(response);
});


//start the app
app.listen(3001, () => console.log(`BBCR Exchange type service listening on port 3001!`))


// REK6cemgPtaLNYfUWR4ciowAn0DEHSmW