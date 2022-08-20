const express = require('express');
const router = express.Router();
const {controllers:{postLogin,postRegister}} = require('../controllers/auth/authController')
const Joi = require('joi');
const auth = require('../middleware/auth')
const validator = require('express-joi-validation').createValidator({});

const registerSchema =Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required()
})

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required()
})

router.get("/test",auth, (req,res) => {
  res.send('요청 성공');
})

router.post('/register',validator.body(registerSchema),postRegister)
router.post('/login',validator.body(loginSchema), postLogin)

module.exports = router;
