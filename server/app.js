var express    = require('express');
var path 	   = require('path');
var app		   = express();
var server     = require('http').createServer(app);
var bodyParser = require('body-parser');
var flash      = require('connect-flash');
var session    = require('express-session');
var auth       = require('./auth.js');

app.use(bodyParser.urlencoded({
	extended: true
}));

//tells the how to find views
app.set('views', path.join(__dirname, 'views'));
//telling express we're using handlebars
app.set('view engine', 'hbs');

var logins = [];
var passwords = [];


app.get('/', function(req, res){
	res.render('home');
})

app.post('/logins', function(req, res){
	console.log(req.body.login)
	logins.push(req.body.login);
	console.log(req.body.password)
	passwords.push(req.body.password);
	res.render('home');
})


server.listen(3000, function(){
	console.log('yo it is on port 3000')
})