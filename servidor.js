var express = require("express");
var application = express();

application.use( express.static(__dirname + '/invie') );

application.get('/', home);

function home(peticion, resultado)
{
    resultado.sendFile('index.html');
}

application.listen(8989);