var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();

var port = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/app/public"));
app.use(express.static(__dirname + "/app/data"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port,function() {
    console.log(`App is listening on http://localhost:${port}`)
})