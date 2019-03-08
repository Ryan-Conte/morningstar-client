const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8055;
const routes = require('./Routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Express setup
app.listen(port);
console.log('Morning API running on port: ' + port);

app.use(function (req, res, next) {
  //Crons setup
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', routes);
