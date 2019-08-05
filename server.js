const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/index.html"));
  });

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });

