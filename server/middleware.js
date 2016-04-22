var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
	var homeRouter = express.Router();

	app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, 'client/')));
  app.use('/home', homeRouter);

  require('./home/HomeRouter.js')(homeRouter);
};