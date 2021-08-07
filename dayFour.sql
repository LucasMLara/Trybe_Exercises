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
