const express = require('express');
const { registerUser, grabUsers } = require('../contollers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/all-users', grabUsers);

module.exports = router