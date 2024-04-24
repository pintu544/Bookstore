const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Registration
router.post('/register', authController.registerUser);

// Login
router.post('/login', authController.loginUser);

// Get current user profile 
router.get('/me', authMiddleware, authController.getMe); 

module.exports = router; 
