const http = require('http'); 
const express = require('express'); 
const cors = require('cors');
const app = express(); 

app.use(cors); /* NEW */

// Then pass these options to cors:

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

app.use(cors(corsOptions))


const url = "http://localhost:3000/dev/livros";
http.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data);
  })
}).on('error', err => {
  console.log(err.message);
})

//listen

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }
);