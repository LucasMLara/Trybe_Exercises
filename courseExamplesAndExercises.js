use('class')
db.movies.find({title:'Batman'});
use('class')
db.movies.find({title:'Home Alone'});
use('class')
db.movies.find({title:'Godzilla'});


// Exercício 1: Adicione a categoria "superhero" ao filme Batman .

use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$push: {
      category:'superhero'
      }}
);
// Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .
use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$push: 
      { category:
          { $each:
            ['villain', 'comic-based']
      }
    }
  }
);

// Exercício 3: Remova a categoria "action" do filme Batman .
use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$pull: {category:'action'}}
);

// Exercício 4: Remova o primeiro elemento do array category do filme Batman .
use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$pop: {category:-1}}
);

// Exercício 5: Remova o último elemento do array category do filme Batman .
use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$pop: {category:1}}
);

// Exercício 6: Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.
use('class')
db.movies.updateOne(
  {title:/batman/i},
    {$addToSet: {category:'action'}}
);
// Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .
use('class')
db.movies.updateMany(
  { 
    title: { $in: [/batman/i, /home alone/i]}},
      {$push: {category:'90s'}}
);
  // {title:/batman/i, title:/home alone/i}, faltou o IN.. e na segunda tentativa quase n foi pq faltou uma vírgula ao fim da linha de filtro (linha 62)

// Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:

use('class')
db.movies.updateOne(
    {title:/home alone/i}, 
    {$push:{cast:{$each:[{
          "actor": "Macaulay Culkin",
          "character": "Kevin"
        },
        {
          "actor": "Joe Pesci",
          "character": "Harry"
        },
        {
          "actor": "Daniel Stern"
        }]}}}
  );

// Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .
use('class')
db.movies.find({title:'Home Alone'});

use('class')
db.movies.updateOne(
    {
      title:/home alone/i,
      "cast.actor":/daniel stern/i 
    },
      {$set: {"cast.$.character":'Marv'}}
    );


// Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
use('class')
db.movies.find({title:'Batman'});

use('class')
db.movies.updateOne(
    {title:/batman/i}, 
    {$push:{cast:{$each:[{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}]}}}
  );

// Exercício 11: Produza três querys para o filme Batman :

// Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;
use('class')
db.movies.update({title:/batman/i, "cast.character": /batman/i},{ $push: {"cast.$.actor":"Christian Bale"}})

// Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;
use('class')
db.movies.update({title:/batman/i, "cast.character": /alfred/i},{ $push: {"cast.$.actor":"Michal Caine"}})

// Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .
use('class')
db.movies.update({title:/batman/i, "cast.character": /coringa/i},{ $push: {"cast.$.actor":"Heath Ledger"}})

// Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.

use('class')
db.movies.update(
  {
    title:/batman/i, "cast.character": /batman/i
    },
    {
$push:{ "cast.$.actor": { 
        $each:['Michael Keaton', 'Val Kilmer', 'George Clooney'],
$sort:1, 
      },
    },
  },
);

//ATENÇÃO AOS EXERCÍCIOS DO EXERCICIO 11 . EU ANTES USEI SET AO INVÉS DE PUSH E ISSO NÃO GEROU O ARRAY, IMPOSSIBILITANDO A EXECUÇÃO DA QUERY DO EXERCÍCIO 12
