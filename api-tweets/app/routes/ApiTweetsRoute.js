module.exports = function(app) {
	const controller = require('../controllers/ApiTweetsController');

	app.get('/api-tweets/', controller.getTweets);
};
