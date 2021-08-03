SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3;
SELECT 10+15;
SELECT 10*15;
SELECT * FROM Scientists.Scientists;
SELECT name AS 'Nome do Projeto', hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT name from Scientists.Scientists ORDER BY name;
SELECT * FROM Scientists.Projects;
SELECT name AS 'Nome do Projeto de forma descendente' from Scientists.Projects ORDER BY Name DESC;
-- primeira tentativa - se atentar às aspas das strings na posição certa => SELECT CONCAT('O Projeto',' ', Name,' ', precisou de,' ', Hours,' horas para ser concluído') AS resultado from Projects;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1;

SELECT name, hours FROM Scientists.Projects
ORDER BY hours 
LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY hours 
LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' Cientistas na Tabela Scientists.') FROM Scientists.Projects;