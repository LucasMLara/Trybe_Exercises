// Selecione e faça a contagem dos restaurantes presentes nos bairros Queens , Staten Island e Bronx . (utilizando o atributo borough )
use ('business');

db.restaurants.count({borough: {$in:['Queens', 'Staten Island', 'Bronx']}});
// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American . (utilizando o atributo cuisine )
use ('business');

db.restaurants.count({cuisine: {$ne:'American'}});
// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 . (utilizando o atributo rating )
use ('business');

db.restaurants.count({rating: {$gte:8}});
// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4 .
use ('business');

db.restaurants.count({rating: {$lt:4}});
// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5 , 6 e 7 .
use ('business');

db.restaurants.count({rating: {$nin:[5,6,7]}});

// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , essa consulta também deve retornar restaurantes que não possuem o campo avaliação.
use ('business');

db.restaurants.count({rating: {$not: {$lte:5}}});
// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6 , ou restaurantes localizados no bairro Brooklyn .
use ('business');

db.restaurants.count( { $or: [ { rating: {$gte: 6} },{ borough:{$eq: "Brooklyn"} } ] } );

db.restaurants.count( { $or: [ { rating: {$gte: 6} },{ borough:"Brooklyn"} ] } );

// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , Staten Island e Broklyn e possuem avaliação maior que 4 .
use ('business');

db.restaurants.count(
{ $and:[ 
    {borough: {$in:['Queens', 'Staten Island', 'Brooklyn']}},
    {rating: {$gt: 4} }  ]
}
);

// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 , nem o campo culinária seja do tipo American .
use ('business');

db.restaurants.count({$nor:[{rating:1},{cuisine:'American'}]});

// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , 
// E esteja localizado no bairro Brooklyn , OU não possuem culinária do tipo Delicatessen .

use ('business');

db.restaurants.count({
    $and: [
    { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
    { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
});


// Primeira tentativa;

// db.restaurants.count({
//   $and:[
//     {rating: {$gte:6, $lte:10}},
//     {borough:'Brooklyn'},
//     {cuisine: {$nor:'Delicatessen'}}
//   ]
// });


// Ordene alfabeticamente os restaurantes pelo nome (atributo name ).
use ('business');

db.restaurants.find().sort({name:1});
// Ordene os restaurantes de forma descrescente baseado nas avaliações.
use ('business');

db.restaurants.find().sort({rating:-1});

// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices .
use ('business');

db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });
// Remova todos os restaurantes que possuem culinária do tipo American .

use ('business');

db.restaurants.deleteMany({cuisine:'American'});
// {
//   "acknowledged": true,
//   "deletedCount": 20
// }


// Course Exercises

// Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
use('class')

db.superheroes.findOne();
// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
use('class')

db.superheroes.find({'aspects.height': {$lt:180}});
// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
use('class')

db.superheroes.count({'aspects.height': {$lt:180}});

// Exercício 4: Retorne o total de super-heróis com até 1.80m.
use('class')

db.superheroes.count({'aspects.height': {$lte:180}});

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.

use('class')

db.superheroes.findOne({'aspects.height': {$gte:200}});

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
use('class')

db.superheroes.count({'aspects.height': {$gte:200}});

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
use('class')

db.superheroes.find({'aspects.eyeColor': "green" });

// Exercício 8: Retorne o total de super-heróis com olhos azuis.

use('class')

db.superheroes.count({'aspects.eyeColor': "blue" });

// Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).

use('class')

db.superheroes.find({"aspects.hairColor": {$in:['black', 'No Hair']}});

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
use('class')

db.superheroes.count({"aspects.hairColor": {$in:['black', 'No Hair']}});

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
use('class')

db.superheroes.count({"aspects.hairColor": {$nin:['black', 'No Hair']}});
// Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
use('class')

db.superheroes.count();
// Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m .
use('class')

db.superheroes.find({$nor:[{race:"human"},{"aspects.height": {$gt:180}}]});

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
use('class')

db.superheroes.find(
    {
        $and:[
            {
                $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
            },
            {
                publisher: "Marvel Comics"
            }
        ]
    }
)

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
use('class')

db.superheroes.find(
    {
        $and: [
            {
                "aspects.weight": { $gte: 80, $lte: 100 }
            },
            {
                $or: [{ race: "Human" }, { race: "Mutant" }]
            },
            {
                publisher: { $ne: "DC Comics" }
            }
        ]
    }
)
// Exercício 16: Retorne o total de documentos que não contêm o campo race .
use('class')

db.superheroes.count({race: {$exists: false}})

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
use('class')

db.superheroes.count({"aspects.hairColor": {$exists: true}})

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
use('class')

db.superheroes.deleteOne({publisher:"Sony Pictures"})

// Exercício 19: Remova todos os documentos publicados pelo George Lucas .

use('class')

db.superheroes.deleteMany({publisher:"George Lucas"})
