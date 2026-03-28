# Missão Prática — Segurança de API

Análise e correção de vulnerabilidades em uma aplicação web baseada em API REST.

##

## Sobre

Esta atividade consiste na identificação e correção de falhas de segurança em uma aplicação web legada.

A aplicação possuía vulnerabilidades relacionadas à autenticação, controle de acesso e tratamento inadequado de parâmetros, permitindo que usuários não autorizados acessassem recursos protegidos.

O objetivo do projeto é refatorar a arquitetura da aplicação para garantir maior segurança no acesso à API.

##

## Problemas Identificados

Durante a análise da aplicação foram detectadas vulnerabilidades críticas:

**Sessão baseada em identificador previsível**

* o identificador de sessão era derivado do ID do usuário
* o algoritmo utilizado permitia ataques de força bruta

**Token exposto na URL**

* o identificador de sessão era transmitido diretamente via URI
* permitindo interceptação ou reutilização do token

**Ausência de controle de acesso**

* endpoints não possuíam validação adequada de permissões

**Falta de validação de parâmetros**

* parâmetros enviados à aplicação não eram tratados
* permitindo exploração de ataques de **Injection**

##

## Correções Implementadas

Para mitigar as vulnerabilidades identificadas foram aplicadas as seguintes melhorias:

* substituição do identificador de sessão por **tokens JWT**
* envio do token através do **header de autenticação**
* validação do token em cada requisição
* implementação de controle de acesso baseado em perfis
* criação de endpoint seguro para consulta de dados do usuário autenticado
* sanitização e validação de parâmetros contra ataques de **Injection**

##

## Conceitos Aplicados

* autenticação baseada em tokens
* autorização baseada em papéis (RBAC)
* segurança em APIs REST
* mitigação de ataques de força bruta
* prevenção de vulnerabilidades de Injection

##

## Testes

Após as correções, a API pode ser testada utilizando clientes de requisição HTTP como:

* Postman
* Insomnia

Essas ferramentas permitem validar autenticação, autorização e o funcionamento correto dos endpoints.

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/FullStack/tree/main/softwareSeguranca)
