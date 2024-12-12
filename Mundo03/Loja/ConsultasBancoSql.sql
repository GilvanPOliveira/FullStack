-- Consulta: Dados completos de pessoas físicas
SELECT *
FROM pessoas
INNER JOIN pessoaFisica ON pessoas.idPessoa = pessoaFisica.idPessoa;

-- Consulta: Dados completos de pessoas jurídicas
SELECT *
FROM pessoas
INNER JOIN pessoaJuridica ON pessoas.idPessoa = pessoaJuridica.idPessoa;

-- Consulta: Movimentações de entrada, com produto, fornecedor, quantidade, preço unitário e valor total
SELECT p.nome AS produto, pf.nome AS fornecedor, m.quantidade, m.valorUnitario, (m.quantidade * m.valorUnitario) AS valor_total
FROM movimento m
JOIN produtos p ON m.idProduto = p.idProduto
JOIN pessoas pf ON m.idPessoa = pf.idPessoa
WHERE m.tipo = 'E';

-- Consulta: Movimentações de saída, com produto, comprador, quantidade, preço unitário e valor total
SELECT p.nome AS produto, pc.nome AS comprador, m.quantidade, m.valorUnitario, (m.quantidade * m.valorUnitario) AS valor_total
FROM movimento m
JOIN produtos p ON m.idProduto = p.idProduto
JOIN pessoas pc ON m.idPessoa = pc.idPessoa
WHERE m.tipo = 'S';

-- Consulta: Valor total das entradas agrupadas por produto
SELECT p.nome AS produto, SUM(m.quantidade * m.valorUnitario) AS valor_total_entrada
FROM movimento m
JOIN produtos p ON m.idProduto = p.idProduto
WHERE m.tipo = 'E'
GROUP BY p.nome;

-- Consulta: Valor total das saídas agrupadas por produto
SELECT p.nome AS produto, SUM(m.quantidade * m.valorUnitario) AS valor_total_saida
FROM movimento m
JOIN produtos p ON m.idProduto = p.idProduto
WHERE m.tipo = 'S'
GROUP BY p.nome;

-- Consulta: Operadores que não efetuaram movimentações de entrada (compra)
SELECT u.nome AS operador
FROM usuarios u
LEFT JOIN movimento m ON u.idUsuario = m.idUsuario
WHERE m.idMovimento IS NULL;

-- Consulta: Valor total de entrada, agrupado por operador
SELECT u.nome AS operador, SUM(m.quantidade * m.valorUnitario) AS valor_total_entrada
FROM movimento m
JOIN usuarios u ON m.idUsuario = u.idUsuario
WHERE m.tipo = 'E'
GROUP BY u.nome;

-- Consulta: Valor total de saída, agrupado por operador
SELECT u.nome AS operador, SUM(m.quantidade * m.valorUnitario) AS valor_total_saida
FROM movimento m
JOIN usuarios u ON m.idUsuario = u.idUsuario
WHERE m.tipo = 'S'
GROUP BY u.nome;

-- Consulta: Valor médio de venda por produto, utilizando média ponderada
SELECT p.nome AS produto, SUM(m.quantidade * m.valorUnitario) / SUM(m.quantidade) AS valor_medio_venda
FROM movimento m
JOIN produtos p ON m.idProduto = p.idProduto
WHERE m.tipo = 'S'
GROUP BY p.nome;
