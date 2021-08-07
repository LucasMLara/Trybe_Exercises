SELECT * FROM sakila.actor
ORDER BY actor_id DESC;

INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.store;

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES ('Lucas', 'Lara', 5, 2, 'lmlara');
-- Por tentativa e erro, verifiquei que as querys não eram realizadas caso não adicionasse qualquer valor em colunas que não fosse NOT NULL. 
-- o Endereço de email pode ter valores null e portanto foi possivel inserir os dados sem um email válido.
-- o store ID necessáriamente precisa ser uma das FK da tabela store. Não foi possível inserir um ID diferente do que existe em outra tabela
-- active não foi necessário pois possui DEFAULT VALUE, o update é automáticom com o timestamp e o ID possui autoincrement.

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username, email)
VALUES	('Rafael', 'Medeiros', 6, 1, 'rmedeiros', 'medeiros@sakila.staff.com'),
		('Beatriz', 'Zidioti', 7, 2, 'bzidiot', 'zidioti@sakila.staff.com');
        
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
SELECT * FROM sakila.actor
ORDER BY actor_id DESC;

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
    LIMIT 5;
    
-- Cadastre três categorias de uma vez só na tabela sakila.category .

SELECT * FROM sakila.category;

INSERT INTO sakila.category (name)
VALUES ('Adult'),
('Old-School'),
('E-Sports');

-- Cadastre uma nova loja na tabela sakila.store .
SELECT * FROM sakila.store;
SELECT * FROM sakila.staff;

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

-- esse exercício está de acordo com o gabarito, mas não passa pois é necessário criar dados na tabela originária do FK, 
-- 20 minutos depois executando a mesma query, foi tudo realizado com sucesso. VAI ENTENDER...
-- Motivo de ter dado certo depois mas não ter dado certo antes = Não considerou as adições em STAFF realizadas nas querys anteriores.
-- manager_staff_id é um FK e não pode ser adicionada aqui diretamente

SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET email = 'lucasml@sakila.staff.com'
WHERE staff_id = 3;

-- Alterando mais de uma coluna ao mesmo tempo

UPDATE sakila.staff
SET email = 'Murilo@sakila.staff.com'
WHERE staff_id = 1;

SELECT * FROM sakila.actor;

UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);
-- UPDATE EM MASSA
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);


-- SET SQL_SAFE_UPDATES = 0/1 {1 ativa, 0 desativa};

SELECT * FROM sakila.staff;

UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT first_name, last_name FROM sakila.actor
WHERE first_name = 'Jules';

-- Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

SELECT * FROM sakila.category;

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name  = 'Sci-fi';

-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 AND
rating IN('G', 'PG', 'PG-13') AND
replacement_cost > 20;


-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. 
-- Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length <= 100 THEN 10
		WHEN length > 100 THEN 20
ELSE rental_rate
END
);

-- UPDATE sakila.film
-- SET rental_rate = 10
-- WHERE length <= 100 AND 
-- rental_rate = 20
-- WHERE length > 100;

-- UPDATE sakila.film
-- SET rental_rate = (
	-- CASE length WHEN <= 100 THEN 10
--     WHEN length > 100 THEN 20
-- ELSE rental_rate
-- END
-- );
