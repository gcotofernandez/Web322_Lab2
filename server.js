var HTTP_PORT = process.env.PORT || 3000;

const express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send(`Hello WEB322!`);

});

const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});