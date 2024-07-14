-- Criando o login "Loja" com senha "loja" e concedendo permissões necessárias
USE master;
GO
CREATE LOGIN Loja WITH PASSWORD = 'loja';
GO
ALTER SERVER ROLE sysadmin ADD MEMBER Loja;
GO

-- Criando o banco de dados
CREATE DATABASE Loja;
GO
USE Loja;

-- Criando as tabelas
-- Tabela Usuários
CREATE TABLE usuarios (
idUsuario INT PRIMARY KEY,
nome NVARCHAR(100),
senha NVARCHAR(50)
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

-- Tabela PessoaFisica
CREATE TABLE pessoaFisica (
idPessoa INT PRIMARY KEY,
cpf NVARCHAR(14),
FOREIGN KEY (idPessoa) REFERENCES pessoas(idPessoa)
);

-- Tabela PessoaJuridica
CREATE TABLE pessoaJuridica (
idPessoa INT PRIMARY KEY,
cnpj NVARCHAR(18),
FOREIGN KEY (idPessoa) REFERENCES pessoas(idPessoa)
);

-- Tabela Produtos
CREATE TABLE produtos (
idProduto INT PRIMARY KEY,
nome NVARCHAR(100),
quantidade INT,
preco DECIMAL(10, 2)
);

-- Criação da tabela de movimentos
CREATE TABLE movimento (
idMovimento INT PRIMARY KEY IDENTITY,
idUsuario INT,
idPessoa INT,
idProduto INT,
quantidade INT,
tipo VARCHAR(10), -- 'Entrada/Compra' ou 'Saida/Venda'
valorUnitario DECIMAL(10,2),
FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
FOREIGN KEY (idProduto) REFERENCES produtos(idProduto),
FOREIGN KEY (idPessoa) REFERENCES pessoas(idPessoa)   
);

-- Criando a sequência para geração dos identificadores de pessoa
CREATE SEQUENCE pessoaIDSeq
START WITH 1
INCREMENT BY 1;