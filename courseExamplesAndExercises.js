// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman .
use ('class')

db.movies.update({
    title: 'Batman'
},{
    $set: {
      imdbRating: 7.7
    }
});
// Exercício 2 : Altere budget para 1 no filme Godzilla .
use ('class')

db.movies.update({
    title: 'Godzilla'
},{
    $set: {
      budget: 1
    }
});
// Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
use ('class')

db.movies.update({
    title: 'Home Alone'
},{
    $set: {
      budget: 15,
      imdbRating: 5.5
    }
});

// Exercício 4 : Aumente em 2 o imdbRating do filme Batman .
use ('class')

db.movies.update({
    title: 'Batman'
},{
    $inc: {
      imdbRating: 2
    }
});

// Exercício 5 : Aumente em 5 o budget do filme Home Alone .
use ('class')

db.movies.update({
    title: 'Home Alone'
},{
    $inc: {
      budget: 5
    }
});

// Exercício 6 : Multiplique por 4 o imdbRating do filme Batman .
use ('class')

db.movies.update({
    title: 'Batman'
},{
    $mul: {
      imdbRating: 4
    }
});

// Exercício 7 : Renomeie o campo budget para estimatedBudget do filme Batman .
use ('class')

db.movies.update({
    title: 'Batman'
},{
    $rename: {
      budget: "estimatedBudget"
    }
});

// Exercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone .
use ('class')

db.movies.update({
    title: 'Home Alone'
},{
    $min: {
      budget: 5
    }
});
// Exercício 9 : Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla 
//. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla .
use ('class')

db.movies.update({
    title: 'Godzilla'
},{
    $max: {
      imdbRating: 8.6
    },
    $set :{
      "category.1": "thriller"
    }
});

// Exercício 10 : Utilizando o operador $currentDate , crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone .

use ('class')
db.movies.update(
  { title: 'Home Alone' },
  { $unset: { lastUpdated:""} }
  );

use ('class')
db.movies.update(
  { title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } }
);

// Exercício 11 : Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.
use ('class')
db.movies.updateMany({},
    {$set:{ sequels:0}}
);
// Exercício 12 : Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.
use ('class')
db.movies.updateMany(
  {},
  { $unset: { 
    estimatedBudget:"", budget:""
    }
  }
  );
// Exercício 13 : Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17 , caso o valor de imdbRating seja menor que 17 .
use('class')
db.movies.updateMany(
  { $or: [{
    title:'Batman'}, {title:'Home Alone'
    }] },
  {$max: {imdbRating:17} }
  )

// use('class')
//  esqueci de por os objetos separados dentro de uma array quando se usar um $OR
// db.movies.updateMany(
//   { $or: [{
//     title:'Batman', title:'Home Alone'
//     }] },
//   {$max: {imdbRating:17} }
//   )
//BONUS EXERCISES

// As informações acima são sobre a Escola Jean Grey de Ensino Superior. Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate , que armazena a data da última alteração com o tipo timestamp . Os exercícios devem ser realizados na ordem.

// Exercício 14 : Remova o campo class dos documentos que possuem esse campo com o valor unknown .
use('class')
db.xmen.find();

use('class')

db.xmen.updateMany(
  {class: "unknown"},
    { $unset: {
        class:""
    },
    $currentDate: {
      lastUpdate: {$type: 'timestamp'}
    }
    }
  );

// Exercício 15 : Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.

use('class')
db.xmen.updateMany({}, {$rename: {
  name: 'hero_name', true_name:'full_name'
}, $set:{
  power:100
}, $currentDate:{ lastUpdate: {$type: 'timestamp'}}});

// Exercício 16 : Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500 .

use('class')
db.xmen.updateMany({ $or:[ {class:/omega/i},{class:/gama/i} ] },
  { $max: { power:500}, $currentDate: {lastUpdate: {$type: 'timestamp'}} }
);
//primeira tentativa abaixo. coloquei chaves demais. Consegui sem olhar o gabarito. HORAY
// { $max: {power: 500},
//       { $currentDate:{ lastUpdate:{ $type:'timestamp' } } } } )

// Exercício 17 : Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300 .
use('class')
db.xmen.updateMany( { class:/gama/i },
  { $min: { power:300}, $currentDate: {lastUpdate: {$type: 'timestamp'}} }
);

// Exercício 18 : Decremente em 100 o poder dos mutantes que não possuem a propriedade class .
use('class')
db.xmen.updateMany({class: {$exists: false}},{ $inc:{power: -100}, $currentDate: {lastUpdate: {$type:'timestamp'}}});
// db.xmen.updateMany({$exists: {class: false}},{ $inc:{power: -100}, $currentDate: {lastUpdate: {$type:'timestamp'}}}); minha primeira tentativa; troquei a posição da propriedade e do operador exists

// Exercício 19 : Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] 
// a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.

use('class')

db.xmen.updateMany({$or:[{occupation:/senior staff/i, power:{$gt:100}},{occupation:/junior staff/i, power: {$gt:200}}]},{$set: {areas:['Students Room']}, $currentDate:{ lastUpdate:{$type:'timestamp'}}})

// db.xmen.updateMany({$and:[{occupation:/senior staff/i},{power: {$gt:100}}], $and:[{occupation:/junior staff/i}, {power: {$gt:200}}]},{$set: {'areas':['Students Room']}, $currentDate:{ lastUpdate:{$type:'timestamp'}}}) PRIMEIRA TENTATIVA! trocar AND por OR apesar do exercício dizer 'E' . Dentro do Array , cada documento é  identificado por um objeto inteiro e todos os campos devem ser separados por vírgula - de acordo com o gabarito do Course.


// Exercício 20 : Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
use('class')

db.xmen.updateMany({$and:[{areas: {$exists:false}, occupation:/junior staff/i}]},
    {$set: { areas:['Outside']}, $currentDate:{ lastUpdate: {$type:'timestamp'}}})

// Primeira tentativa abaixo. consegui corrigir reescrevendo a query sem olhar o gabarito. Horraayy! ;D 
// db.xmen.updateMany(
//   {$and:[{areas: {$exists:false}, occupation:/junior staff/i}]},
//     { $set: {areas:['Outside'],
//       $currentDate:{ lastUpdate: {$type:'timestamp'}}}})

// As informações acima são sobre a Escola Jean Grey de Ensino Superior. Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate , que armazena a data da última alteração com o tipo timestamp . Os exercícios devem ser realizados na ordem.

// Exercício 14 : Remova o campo class dos documentos que possuem esse campo com o valor unknown .
use('class')
db.xmen.find({class: "unknown"});
// Exercício 15 : Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.
// Exercício 16 : Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500 .
// Exercício 17 : Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300 .
// Exercício 18 : Decremente em 100 o poder dos mutantes que não possuem a propriedade class .
// Exercício 19 : Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
// Exercício 20 : Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
