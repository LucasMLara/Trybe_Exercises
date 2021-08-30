const router = require('express').Router();

const {
  validateUser,
  validateEmail,
  validatePassword
} = require('./middlewares/allValidation')