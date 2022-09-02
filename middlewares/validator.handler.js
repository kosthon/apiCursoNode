const boom = require('@hapi/boom');

// Se requiere un middleware que sea dinamico donde no se envia directamente el response ni el request,
// Sino el schema y la propiedad (body, params, query). Acá implementamos una closure -> función que retorna otra función
function validatorHandler(schema, property) {
	return (req, res, next) => {
		// la data dependiendo del request al que accedamos (get, post, patch) seria dinamico req.body, req.params, req.query
		const data = req[property];
		const {error} = schema.validate(data, {abortEarly: false});
		if (error) {
			// Para que los middleware de tipo error hagan el proceso lo enviamos como argumento al next()
			next(boom.badRequest(error));
		}
		next();
	};
}

module.exports = validatorHandler;
