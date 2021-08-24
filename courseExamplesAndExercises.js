use('agg_example')
db.transactions.find();
use('agg_example')
db.clients.find();
// 1. Selecione todas as transações feitas pelo cliente chamado "Dave America".

use('agg_example')
db.transactions.aggregate([
  {$match: {from:/dave america/i}}
]);

// 2. Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".

use('agg_example')
db.transactions.aggregate([
  {$match: {
    $or:[{value: {$gte:700, $lte:6000}},{to:/lisa simpson/i}]
  }}
]);

// 3. Selecione três transações com o valor acima de 1000.

use('agg_example')
db.transactions.aggregate(
  [
    {$match:{value:{$gt:1000}}},
    {$limit: 3}
  ]
);

// 1. Selecione todos os bancos, ou seja, valores do campo bank .

use('agg_example')
db.transactions.aggregate([
  {
    $group:{ 
      _id:'$bank',
      bank: {$sum:1}
    }
  }
]);
// 2. Selecione o valor total das transações em cada banco e quantas são.

use('agg_example');
db.transactions.aggregate([
  {
    $group: {
      _id:'$bank',
      total: {$sum:'$value'},
      transações: {$sum:1}
    }
  }
]);

// 1. Selecione todos os clientes com as suas respectivas transações feitas.

use('agg_example')
db.clients.aggregate([
  { 
    $lookup: {
      from: 'transactions', // aqui vc vai selecionar a outra collection para comparação
      localField: 'name', // aqui vc coloca o documento da sua collection atual db.clients
      foreignField: 'from', // aqui vc coloca o documento da outra collection
      as: 'Transações de Clientes' // renomeie 
    }
  }
]);

// 2. Selecione quatro clientes com as suas respectivas transações recebidas.

use('agg_example')
db.clients.aggregate([
  { 
    $lookup: {
      from: 'transactions', // aqui vc vai selecionar a outra collection para comparação
      localField: 'name', // aqui vc coloca o documento da sua collection atual db.clients
      foreignField: 'to', // aqui vc coloca o documento da outra collection
      as: 'Transações de Clientes' // renomeie 
    },
  },
  {
    $limit:4
  }
]);
// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

use('agg_example')
db.clients.aggregate([
    {
      $match:{ State:/florida/i}
    },
    { 
    $lookup: {
      from: 'transactions', // aqui vc vai selecionar a outra collection para comparação
      localField: 'name', // aqui vc coloca o documento da sua collection atual db.clients
      foreignField: 'to', // aqui vc coloca o documento da outra collection
      as: 'Transações de Clientes' // renomeie 
    }
  }
]);


db.clientes.find()
db.produtos.find()
db.vendas.find()

// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
db.clientes.aggregate([
  {
    $match: {
      sexo: /masculino/i
    }
  }
]);
// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .
db.clientes.aggregate([
  {
    $match: {
      sexo: /feminino/i,
      dataNascimento: {$gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31')}
    }
  }
]);

// db.clientes.aggregate([
//   {
//     $match: {
//       sexo: /feminino/i,
//       dataNascimento: {$gte: 1995, $lte: 2005}
//     }
//   }
// ]);

// db.clientes.aggregate([
//   {
//     $match: {
//       sexo: /feminino/i,
//       dataNascimento: {$year: {$gte: 1995, $lte: 2005}}
//     }
//   }
// ]);

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
db.clientes.aggregate([
  {
    $match: {
      sexo: /feminino/i,
      dataNascimento: {$gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31')}
    }
  },
  {
    $limit:5
  }
]);
// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.findOne();
db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": 'SC'
    }
  },
  {
    $group:{
      _id:"SC",
      total: {$sum:1}
    }
  }
]);

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
db.clientes.aggregate([
  {
    $group: {
      _id:'$sexo',
      total: {$sum: 1}
    }
  }
]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
// {"estado": "SP",
//   "sexo": "MASCULINO",
//   "total": 100
// }

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query .

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
// {
//   "totalVendas": 10,
//   "uf": "SP"
// }
// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }
