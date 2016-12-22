const express = require( 'express' );
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);


app.listen(3000, function() {
	console.log('Server listening')
});