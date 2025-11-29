# Mundo 05 - Nível 05 - RPG0035 - SOFTWARE SEM SEGURANÇA NÃO SERVE!

Através dessa atividade o aluno analisará uma falha de segurança, em uma aplicação web, e aplicará as medidas corretivas necessárias para garantir o seu correto e seguro funcionamento.

## Contextualização

O time de segurança da Software House, onde você atua como Especialista em Desenvolvimento de Software, identificou uma falha de segurança, explorada por ataques que geraram o vazamento de dados, além de outros problemas, em uma das aplicações legadas, desenvolvida há alguns anos atrás. Tal falha consiste na concessão de acesso não autorizado de recursos a usuários. O cenário completo é descrito a seguir:

A aplicação web possui um frontend e um backend, sendo esse último uma API Rest. O padrão geral da estrutura de URLs (e URI) da aplicação é:

- http://dominio.com/nome-do-recurso/{session-id}
- http://dominio.com/nome-do-recurso/{id}/{session-id}

O padrão acima é usado tanto no frontend, no navegador, como no backend, nos endpoints.

Após uma simples análise, foi identificado que o valor do parâmetro “session-id” é obtido com a encriptação do id do usuário logado no sistema, usando um processo suscetível a falhas, uma vez que um dos principais dados necessários no processo de criptografia é o próprio nome da empresa detentora do software.

Logo, tal falha é passível de ser explorada via ataques de força bruta para descoberta do padrão usado na geração da “session-id” e consequente geração de valores aleatórios que serão usados para a realização de requisições – como solicitações de dados e também criação e atualização – na aplicação, até a obtenção do acesso indevido.

Além do problema já relatado, o time de segurança descobriu que, atualmente, não é realizado nenhum tratamento no processamento dos parâmetros trafegados na aplicação. Logo, também é possível explorar outras falhas, como as de “Injection” de códigos maliciosos.

Frente ao exposto, seu trabalho consistirá em refatorar a aplicação, conforme procedimentos descritos a seguir.

## Procedimentos

1. Abra o código-fonte fornecido acima na IDE ou editor;
2. Refatore o método de criptografia utilizado atualmente, substituindo a geração do “session-id” por um outro mecanismo de segurança, como tokens JWT;
3. Refatore a arquitetura da API, para que o token (atualmente representado pelo “session-id”) não seja trafegado via URI, mas através do header da requisição;
4. A cada requisição recebida pela API, valide o token de segurança, incluindo a identidade do usuário, data/hora de expiração do mesmo, etc.;
5. Inclua, em todos os endpoints, controle de acesso a recursos baseado no perfil do usuário. Garante que, à exceção do endpoint de login, todos os demais sejam acessados apenas por usuários com perfil ‘admin’;
6. Para testar a implementação do item anterior, crie um novo endpoint que permita a recuperação dos dados do usuário logado. Tal método não deverá conter o controle de acesso limitado ao perfil ‘admin’;
7. Refatore o método que realiza a busca de contratos no banco, tratando os parâmetros recebidos contra vulnerabilidades do tipo “Injection”. Para isso você poderá utilizar bibliotecas de terceiros, expressões regulares ou outro mecanismo que garanta o sucesso do processo em questão;
8. Salve o código e coloque a API para ser executada;
9. Utilizando um cliente (Insomnia, Postman ou outro de sua preferência), realize testes na API, garantindo que todos os pontos acima foram tratados.

<br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo05)
