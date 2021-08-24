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
