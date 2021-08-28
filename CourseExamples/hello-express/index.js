// const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { readSimpsons, writeSimpsons } = require('./fs-utility')

app.get('/ping', (req, res) => {
  
  res.status(200).json({message:'pong'})
});

app.post('/hello', (req, res) => {
  const { userName } = req.body;
  res.status(200).json({ "message":`Hello, ${userName}` })
});

app.post('/greetings', (req, res) => {
  const { userName, userAge } = req.body;
  if(userAge<18)
  return res.status(401).json({"message": "Unauthorized"})
  res.status(200).json({ "message":`Hello, ${userName}`, "age":`${userAge}` })
});

app.put('/users/:name/:age', (req, res) => {
  const { userName, userAge } = req.body;
  res.status(200).json({ "message":`Seu nome é ${userName} e voçê tem ${userAge} anos de idade` })
});

app.get('/simpsons', rescue(async (req, res) => {
  const {id, name} = req.body;
  const simpsons = await readSimpsons;
  
  if(simpsons.map(({id}) => id).includes(id)) {
    return res.status(409).json({'message':'ID already exists'})
  }
  simpsons.push({id, name});

  await writeSimpsons(simpsons);
  res.status(204).end();
})
);


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// app.use(bodyParser.json())

// {
// const recipes = [
//   {id:1 , name:'Lasanha', price: 40.0, waitTime:30},
//   {id:2 , name:'Macarrão a Bolonhesa', price: 35.0, waitTime:25},
//   {id:3 , name:'Macarrão com molho branco', price: 35.0, waitTime:25 },
//   {id:4 , name:'Macarrão com molho branco', price: 10.0, waitTime:25 }
// ];
// app.get('/recipes/search', (req, res) => {
//   const { name, maxPrice, minPrice } = req.query;
//   console.log(name, maxPrice, minPrice)
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice) && r.price >= parseInt(minPrice));
//   res.status(200).json(filteredRecipes);
// });

// const drinks = [
//   { id: 1, name: 'Refrigerante Lata', price: 5.0 },
//   { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
//   { id: 3, name: 'Suco 300ml', price: 4.0 },
//   { id: 4, name: 'Suco 1l', price: 10.0 },
//   { id: 5, name: 'Cerveja Lata', price: 4.5 },
//   { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
// ];

// app.get('/drinks/search', (req, res) => {
//   const { name } = req.query;
//   const filteredRecipes = drinks.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });




// app.get('/recipes/:id', (req, res) => {
//   const { id: owl } = req.params;
//   // const recipe = recipes.find((r) => r.id === parseInt(id));
//   const recipe = recipes.find(({id}) => id === parseInt(owl));
    
//   if(!recipe) return res.status(404).json({message:'Recipe Not Found'})

//   res.json(recipe);
// });

// app.get('/drinks', (req, res) => {
//   res.json(drinks);
// });
// }