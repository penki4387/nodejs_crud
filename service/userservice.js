const User = require('../model/usermodel');

class UserService {
    // Create a new user
    async createUser(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw error;
        }
    }

    // Get all users
    async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            throw error;
        }
    }

    // Get user by ID
    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            throw error;
        }
    }

    // Update user
    async updateUser(id, userData) {
        try {
            return await User.findByIdAndUpdate(id, userData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    // Delete user
    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    // Login user
    async loginUser(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }
            if (user.password !== password) {
                throw new Error('Invalid password');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService(); 