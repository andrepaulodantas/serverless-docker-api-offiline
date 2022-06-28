const express = require('express'); 
const app = express(); 
const axios = require('axios');

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "API QUE CONSOME OUTRA API",
  });
});

var config = {
  method: 'get',
  url: 'http://localhost:3000/dev/livros',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));  
})
.catch(function (error) {
  console.log(error);
});

//listen

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }
);