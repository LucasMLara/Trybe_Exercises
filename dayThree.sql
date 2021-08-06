SELECT * FROM sakila.film;

-- O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost <= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate
LIMIT 50;

SELECT * FROM sakila.customer;

-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no resultado

SELECT CONCAT(first_name,' ', last_name) AS 'Clientes Não ativos no sistema' FROM sakila.customer
WHERE active <> 1 AND 
store_id = 2 AND
first_name <> 'KENNETH'
ORDER BY first_name;

-- Quantos clientes estão ativos e na loja 1 ?

SELECT COUNT(*) FROM sakila.customer
WHERE active = 1
AND store_id = 1;

-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1 .

SELECT * FROM sakila.customer
WHERE active <> 1;

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: 
-- hicks, crawford, henry, boyd, mason, morales e kennedy , ordenados por nome em ordem alfabética

SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176 , ordenados em ordem alfabética.

SELECT email from sakila.customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005 . 
-- Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia , diferente do formato brasileiro, que é dia/mês/ano .

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . 
-- Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . 
-- Os resultados devem estar ordenados por título.

SELECT title, rating FROM sakila.film
WHERE rating IN('G', 'PG', 'pg-13')
ORDER BY title
LIMIT 500;

-- Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.

SELECT COUNT(*) FROM sakila.payment WHERE (payment_date) LIKE '2005-05-25%';
SELECT COUNT(*) FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25%';

-- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01%' AND '2005-08-22%';

-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
-- Utilize a coluna rental_date para extrair as informações.

SELECT rental_date 'Data e Hora do pedido' FROM sakila.rental
WHERE rental_id = 10330;

SELECT rental_id 'ID', rental_date 'Data Completa',
 YEAR(rental_date) 'Ano',
 MONTH(rental_date) 'Mês',
 DAY(rental_date) 'Dia',
 HOUR(rental_date) 'Hora',
 MINUTE(rental_date) 'Minuto',
 SECOND(rental_date) 'Segundo'
 FROM sakila.rental
 WHERE rental_id = 10330;

 -- Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .

SELECT * FROM sakila.payment
WHERE DATE(payment_date) LIKE '2005/07/28 22%';


-- Exercícios do dia

-- Escreva uma query para exibir todas as peças que começam com GR .

SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 
-- . Organize o resultado por ordem alfabética de fornecedor.

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;
-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';
-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .

SELECT SUM(quantity) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';





