-- Definindo o contexto do banco de dados
USE master;
GO

-- Excluindo o banco de dados Loja, se existir
IF EXISTS (SELECT 1 FROM sys.databases WHERE name = 'Loja')
BEGIN
    ALTER DATABASE Loja SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE Loja;
END
GO

-- Criando o login "Loja" com senha "loja" e concedendo permissões necessárias
CREATE LOGIN Loja WITH PASSWORD = 'loja';
GO
ALTER SERVER ROLE sysadmin ADD MEMBER Loja;
GO

-- Criando o banco de dados Loja
CREATE DATABASE Loja;
GO

-- Definindo o contexto do banco de dados Loja
USE Loja;
GO

-- Criando as tabelas

-- Tabela Usuários
CREATE TABLE usuarios (
    idUsuario INT PRIMARY KEY IDENTITY,
    nome NVARCHAR(100) NOT NULL,
    senha NVARCHAR(50) NOT NULL
);

-- Tabela Pessoas
CREATE TABLE pessoas (
    idPessoa INT PRIMARY KEY IDENTITY,
    nome NVARCHAR(100),
    logradouro NVARCHAR(200),
    cidade NVARCHAR(50),
    estado NVARCHAR(50),
    telefone NVARCHAR(50),
    email NVARCHAR(50)
);

-- Tabela pessoaFisica
CREATE TABLE pessoaFisica (
    idPessoa INT PRIMARY KEY,
    cpf NVARCHAR(14) NOT NULL,
    CONSTRAINT FK_PessoaFisica_Pessoa FOREIGN KEY(idPessoa) REFERENCES pessoas(idPessoa)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- Tabela pessoaJuridica
CREATE TABLE pessoaJuridica (
    idPessoa INT PRIMARY KEY,
    cnpj NVARCHAR(18) NOT NULL,
    CONSTRAINT FK_PessoaJuridica_Pessoa FOREIGN KEY(idPessoa) REFERENCES pessoas(idPessoa)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- Tabela Produtos
CREATE TABLE produtos (
    idProduto INT PRIMARY KEY IDENTITY,
    nome NVARCHAR(100) NOT NULL,
    quantidade INT,
    preco DECIMAL(10, 2)
);

-- Criação da tabela de Movimentos
CREATE TABLE movimento (
    idMovimento INT PRIMARY KEY IDENTITY,
    idUsuario INT NOT NULL,
    idPessoa INT NOT NULL,
    idProduto INT NOT NULL,
    quantidade INT,
    tipo VARCHAR(10), -- 'Entrada/Compra' ou 'Saida/Venda'
    valorUnitario DECIMAL(10,2),
    CONSTRAINT FK_Usuario_Movimento FOREIGN KEY(idUsuario) REFERENCES usuarios(idUsuario)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    CONSTRAINT FK_Pessoa_Movimento FOREIGN KEY(idPessoa) REFERENCES pessoas(idPessoa)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    CONSTRAINT FK_Produto_Movimento FOREIGN KEY(idProduto) REFERENCES produtos(idProduto)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- Inserção de usuários
INSERT INTO usuarios (nome, senha) VALUES
('op1', 'op1'),
('op2', 'op2');

-- Inserção de produtos
INSERT INTO produtos (nome, quantidade, preco) VALUES
('Banana', 100, 5.00),
('Laranja', 500, 2.00),
('Manga', 800, 4.00);

-- Inserção de pessoas físicas
INSERT INTO pessoas (nome, logradouro, cidade, estado, telefone, email) VALUES
('Joao', 'Rua 12, casa 3, Quitanda', 'Riacho do Sul', 'PA', '1111-1111', 'joao@riacho.com');

-- Obter o último ID de pessoa física inserido
DECLARE @idPessoaFisica INT;
SET @idPessoaFisica = SCOPE_IDENTITY();

-- Inserção de pessoa física
INSERT INTO pessoaFisica (idPessoa, cpf) VALUES
(@idPessoaFisica, '11111111111');

-- Inserção de pessoas jurídicas
INSERT INTO pessoas (nome, logradouro, cidade, estado, telefone, email) VALUES
('JJC', 'Rua 11, Centro', 'Riacho do Norte', 'PA', '1212-1212', 'jjc@riacho.com');

-- Obter o último ID de pessoa jurídica inserido
DECLARE @idPessoaJuridica INT;
SET @idPessoaJuridica = SCOPE_IDENTITY();

-- Inserção de pessoa jurídica
INSERT INTO pessoaJuridica (idPessoa, cnpj) VALUES
(@idPessoaJuridica, '22222222222222');

-- Inserção de movimentações
INSERT INTO movimento (idUsuario, idPessoa, idProduto, quantidade, tipo, valorUnitario) VALUES
(1, @idPessoaFisica, 1, 20, 'S', 4.00), -- Venda de 20 bananas pelo usuário 1 à pessoa física 1
(1, @idPessoaFisica, 2, 15, 'S', 2.00), -- Venda de 15 laranjas pelo usuário 1 à pessoa física 1
(2, @idPessoaJuridica, 2, 10, 'S', 3.00), -- Venda de 10 laranjas pelo usuário 2 à pessoa jurídica 2
(1, @idPessoaJuridica, 2, 15, 'E', 5.00), -- Compra de 15 laranjas pelo usuário 1 da pessoa jurídica 2
(1, @idPessoaJuridica, 3, 20, 'E', 4.00); -- Compra de 20 mangas pelo usuário 1 da pessoa jurídica 2
