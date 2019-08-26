var express = require('express');
var router = express.Router();
const todosController = require('../controllers/todos');

router.get('/', todosController.index);
router.post('/', todosController.create);
router.delete('/:id', todosController.delete);

module.exports = router;