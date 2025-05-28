const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// Login user
router.post('/login', userController.loginUser);

module.exports = router; 