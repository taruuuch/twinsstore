const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const homeRoutes = require('./routes/home.routes');

const app = express();

app.set('view engine', 'pug')
	.set('views','src/views/')
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(cors())
	.use(express.static('public'))
	.use('/', homeRoutes);

module.exports = app;
