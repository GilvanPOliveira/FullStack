# CadastroPoo

Aplicação backend em Java para gerenciamento de cadastro de clientes com persistência em arquivos.

##

## Sobre

Projeto desenvolvido para explorar conceitos fundamentais de programação orientada a objetos em Java, incluindo herança, polimorfismo, encapsulamento e persistência de dados.

O sistema implementa um cadastro de pessoas físicas e jurídicas em modo texto, permitindo manipulação e armazenamento dos registros em arquivos binários.

##

## Funcionalidades

* cadastro de pessoas físicas e jurídicas
* alteração e exclusão de registros
* consulta de registros por ID
* listagem completa de dados
* persistência em arquivos binários
* recuperação de dados previamente armazenados

##

## Arquitetura

O projeto segue uma estrutura simples baseada em separação de responsabilidades:

**Model**

* classes de domínio (`Pessoa`, `PessoaFisica`, `PessoaJuridica`)
* herança e polimorfismo para representação das entidades

**Repository**

* classes responsáveis pela manipulação dos dados em memória
* operações de inserção, alteração, exclusão e consulta

**Persistência**

* serialização de objetos para armazenamento em arquivos
* recuperação dos dados salvos no sistema

**Application**

* interface de execução via console
* menu interativo para manipulação do cadastro

##

## Stack

[![My Skills](https://skillicons.dev/icons?i=java)](https://skillicons.dev)

* Java
* Programação Orientada a Objetos
* Serialização de objetos

##

## Execução

A aplicação é executada via console, permitindo interação do usuário para inclusão, alteração, consulta e persistência de registros.

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io/
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo03)

