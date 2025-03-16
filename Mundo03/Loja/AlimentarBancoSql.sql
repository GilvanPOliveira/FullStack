-- Inserção de usuários
INSERT INTO usuarios (idUsuario, nome, senha) VALUES
(1, 'op1', 'op1'),
(2, 'op2', 'op2');

-- Inserção de produtos
INSERT INTO produtos (idProduto, nome, quantidade, preco) VALUES
(1, 'Banana', 100, 5.00),
(3, 'Laranja', 500, 2.00),
(4, 'Manga', 800, 4.00);

-- Inserção de pessoas físicas
INSERT INTO pessoas (nome, logradouro, cidade, estado, telefone, email) VALUES
('Joao', 'Rua 12, casa 3, Quitanda', 'Riacho do Sul', 'PA', '1111-1111', 'joao@riacho.com');
INSERT INTO pessoaFisica (idPessoa, cpf) VALUES
(SCOPE_IDENTITY(), '11111111111');

-- Inserção de pessoas jurídicas
INSERT INTO pessoas (nome, logradouro, cidade, estado, telefone, email) VALUES
('JJC', 'Rua 11, Centro', 'Riacho do Norte', 'PA', '1212-1212', 'jjc@riacho.com');
INSERT INTO pessoaJuridica (idPessoa, cnpj) VALUES
(SCOPE_IDENTITY(), '22222222222222');

-- Inserção de movimentações
INSERT INTO movimento (idUsuario, idPessoa, idProduto, quantidade, tipo, valorUnitario) VALUES
(1, 1, 1, 20, 'S', 4.00),  -- Venda de 20 bananas pelo usuário 1 à pessoa física 1
(1, 1, 3, 15, 'S', 2.00),  -- Venda de 15 laranjas pelo usuário 1 à pessoa física 1
(2, 2, 3, 10, 'S', 3.00),  -- Venda de 10 laranjas pelo usuário 2 à pessoa jurídica 2
(1, 2, 3, 15, 'E', 5.00),  -- Compra de 15 laranjas pelo usuário 1 da pessoa jurídica 2
(1, 2, 4, 20, 'E', 4.00);  -- Compra de 20 mangas pelo usuário 1 da pessoa jurídica 2
