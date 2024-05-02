const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotas do CRUD
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;