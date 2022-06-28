const serverless = require("serverless-http");
const express = require("express");
const app = express();
const soap = require('soap');

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "API para consulta de CEP",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "SEJAM BEM VINDOS A API DO CEP",
  });
});

/* GET home page. */
app.get('/consulta/:cep', function(req, res, next) {
  var arg = req.params.cep;
  var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
  soap.createClient(url, function (err, client) {
    client.consultaCEP({cep: arg}, function(err, result) {
        if(err) return console.log(err);
        res.send(result)
    })
  })
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
