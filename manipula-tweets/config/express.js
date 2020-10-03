const app = require('express')();
const load = require('express-load');
const bodyParser = require('body-parser');
const port = 8081;

const allowCorsDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, authorization, Content-Length, X-Requested-With');

	if ('OPTIONS' == req.method) {
		res.send(200);
	} else {
		next();
	}
};

app.use(allowCorsDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');

	next();
});
app.all('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	next();
});

app.use(function(req, res, next) {
	const params = {};
	params.token = req.headers.authorization;
	params.url = req.url;
	console.debug('params.url: ', params.url);
	next();
});

function initApp() {
	load('routes', { cwd: 'app' }).into(app);

	app.listen(port, function() {
		console.info('Servidor iniciado na porta ', port);
	});

	app.use(function(req, res) {
		res.status(404);
		res.json({mensagem: 'Serviço não mapeado no servidor.'});
	});
}

module.exports = function() {
	initApp();
	return app;
};
