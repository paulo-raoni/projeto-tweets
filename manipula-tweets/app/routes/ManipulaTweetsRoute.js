module.exports = function(app) {
	const controller = require('../controllers/ManipulaTweetsController');
	app.get('/dados-tweets/', controller.getTweets);
};
