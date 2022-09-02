const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3005;

app.use(express.json());

const whiteList = ['http://localhost:8080', ''];
const options = {
	origin: (origin, callback) => {
		if (whiteList.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('no permitido'));
		}
	},
};
app.use(cors(options));

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('Hola my server in Express');
});

app.listen(port, () => {
	console.log('My port ' + port);
});