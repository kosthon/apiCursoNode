const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json([
		{
			name: 'Nace niño prodijio con excelente lógica de programación',
			description: 'lorem ipsum lorem ipsum lorem ipsum',
			image: 'https//:asdkfljasdf',
		},
		{
			name: 'Nace niño prodijio con excelente lógica de programación',
			description: 'lorem ipsum lorem ipsum lorem ipsum',
			image: 'https//:asdkfljasdf',
		},
	]);
});

router.get('/:id', (req, res) => {
	const {id} = req.params;
	res.json({
		id,
		name: 'Nace niño prodijio con excelente lógica de programación',
		description: 'lorem ipsum lorem ipsum lorem ipsum',
		image: 'https//:asdkfljasdf',
	});
});

router.get('/:id/category/:categoryId', (req, res) => {
	const {id, categoryId} = req.params;
	res.json({
		id,
		categoryId,
		name: 'Nace niño prodijio con excelente lógica de programación',
	});
});

module.exports = router;
