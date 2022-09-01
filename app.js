const express = require('express')
const path = require('path')
const morgan = require("morgan");
const app = express();

const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit:'5mb'}));


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));

const api_index = require('./api/routes/index')

const client = (req, res) => res.sendFile(path.join(__dirname+ '/client/build/index.html'));

app.use('/api', api_index)

app.use('/*', client)

app.listen(port, () => console.log(`Listening on port ${port}`));