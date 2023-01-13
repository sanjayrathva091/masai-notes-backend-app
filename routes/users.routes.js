const express = require('express');
const { loginUser } = require('../controllers/loginUser.ctrl');
const { registerUser } = require('../controllers/registerUser.ctrl');
const userRoutes = express.Router();

/**
 * @POST /api/auth/user/register
 * @description Register a user
 * @access public
 */
userRoutes.post("/user/register", registerUser);

/**
 * @POST /api/auth/user/login
 * @description Login a user
 * @access public
 */
userRoutes.post("/user/login", loginUser);

module.exports = userRoutes;