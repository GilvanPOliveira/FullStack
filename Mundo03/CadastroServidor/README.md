# CadastroServidor

Sistema cliente-servidor em Java utilizando sockets, threads e persistência com JPA.

##

## Sobre

Projeto focado na construção de uma arquitetura cliente-servidor utilizando comunicação via sockets em Java.

O sistema permite autenticação de usuários, consulta de produtos e registro de movimentações, utilizando múltiplas threads no servidor para atendimento simultâneo de clientes e integração com banco de dados.

##

## Funcionalidades

* autenticação de usuários
* comunicação cliente-servidor via socket
* processamento simultâneo com threads
* listagem de produtos
* registro de movimentações de estoque
* persistência de dados com JPA

##

## Arquitetura

O sistema é composto por três camadas principais:

**Servidor**

* gerenciamento de conexões via `ServerSocket`
* threads para atendimento simultâneo de clientes
* acesso ao banco de dados via JPA

**Cliente**

* comunicação com o servidor através de sockets
* envio de comandos e parâmetros
* interface de interação via console

**Persistência**

* entidades JPA
* controladores responsáveis pela manipulação dos dados

##

## Stack

[![My Skills](https://skillicons.dev/icons?i=java)](https://skillicons.dev)

* Java
* Sockets
* Threads
* JPA
* SQL Server

##

## Execução

O sistema é executado em dois componentes:

* **Servidor:** responsável por receber conexões e processar requisições.
* **Cliente:** responsável por enviar comandos e receber respostas do servidor.

O servidor pode atender múltiplos clientes simultaneamente.

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io/
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo03)

