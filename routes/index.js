const productsRouter = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app) {
	app.use('/api/v1/products', productsRouter);
	app.use('/api/v1/users', usersRouter);
}

module.exports = routerApi;
