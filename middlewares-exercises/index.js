const {
  validateUser,
  validateEmail,
  validatePassword
} = require('./middlewares/allValidation')

const express = require('express');

const app = express();
app.use(express.json())


const validacaoExercicio1 = [validateUser, validatePassword, validateEmail]

app.post('/user/register', validacaoExercicio1, (req,res,next) => {

  return res.status(201).json({message:"User Created"})

});

app.listen(3001, console.log("Ta rodando"))