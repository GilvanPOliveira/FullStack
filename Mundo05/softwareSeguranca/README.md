# Segurança de Software

Análise e correção de vulnerabilidades em uma aplicação web baseada em API REST.

## 

## Sobre

Este projeto aborda a identificação e mitigação de vulnerabilidades em uma aplicação web que apresentava falhas críticas de segurança relacionadas à autenticação e ao tratamento de parâmetros.

O estudo consiste na análise da arquitetura da aplicação, identificação das vulnerabilidades existentes e aplicação de melhorias para garantir um funcionamento mais seguro da API.

##

## Vulnerabilidades Identificadas

Durante a análise foram identificados problemas relevantes de segurança:

**Sessão baseada em identificador previsível**

* o identificador de sessão era gerado a partir do ID do usuário
* o mecanismo de criptografia utilizado era suscetível a ataques de força bruta

**Token trafegado via URI**

* o identificador de sessão era incluído diretamente na URL
* isso permitia interceptação e reutilização do token

**Ausência de controle de acesso**

* endpoints podiam ser acessados sem validação adequada de permissões

**Falta de validação de parâmetros**

* parâmetros da aplicação não eram tratados corretamente
* possibilitando ataques de **Injection**

##

## Melhorias Implementadas

Para corrigir as vulnerabilidades identificadas, foram aplicadas as seguintes melhorias:

* substituição do identificador de sessão por **tokens JWT**
* envio do token via **header de autenticação**
* validação de expiração e identidade do token
* implementação de **controle de acesso baseado em perfis**
* criação de endpoint para recuperação segura dos dados do usuário autenticado
* tratamento de parâmetros para mitigação de ataques de **Injection**

##

## Conceitos Aplicados

* autenticação baseada em tokens
* autorização baseada em perfis
* segurança em APIs REST
* prevenção de ataques de força bruta
* mitigação de vulnerabilidades de Injection

##

## Stack

[![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)

* APIs REST
* JWT (JSON Web Token)
* Validação de parâmetros
* Segurança de aplicações web

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo05)
