const express = require('express')
const router = express.Router();

const {logInController, signUpController} = require('../controllers/AuthController')

// router.post('/login', logInController)
router.post('/signin', signUpController)


module.exports = router;