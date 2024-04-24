const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller.js');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes - no authentication needed
router.get('/', bookController.getBooks); 
router.get('/:id', bookController.getBook);

// Protected routes - require authentication
router.use(authMiddleware); // Middleware to protect subsequent routes

router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
