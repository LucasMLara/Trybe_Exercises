// const {
//   validateUser,
//   validateEmail,
//   validatePassword
// } = require('./middlewares/allValidation')

// const crypto = require('crypto');

// function generateToken() {
//   return crypto.randomBytes(6).toString('hex');
// }

// const express = require('express');

// const app = express();
// app.use(express.json())


// const validacaoExercicio1 = [validateUser, validatePassword, validateEmail]

// app.post('/user/register', validacaoExercicio1, (req,res,next) => {

//   return res.status(201).json({message:"User Created"})

// });

// app.listen(3001, console.log("Ta rodando"))


// app.post('/user/login', validateEmail, validatePassword, (_req, res) => {
//   // const { email, password } = req.body; 

//   const token = generateToken()

//   res.status(200).json({token})
// })



// app.post('/user/login', validateEmail, validatePassword, ({message},_req, res, next) => {
//   // const { email, password } = req.body; 

//   const token = generateToken()

//   res.status(200).json({token})

//   next(message)
// })

/* index.js */ 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
//  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });