<%-- 
    Document   : ProdutoLista
    Created on : 4 de mai. de 2024, 17:22:25
    Author     : gilvan
--%>

<%@ page import="cadastroee.model.Produtos" %>
<%@ page import="java.util.List" %>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>

        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
          <title>JSP Page</title>
        </head>

        <body class="container">
          <div>
            <h1>Listagem de Produtos</h1>
          </div>

          <div>
            <table class="table table-striped table-bordered">
              
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Preço de Venda</th>
                  <th>Opções</th>
                </tr>
              </thead>
              
              <tbody>
                  
                <%
                    List<Produtos> produtos = (List<Produtos>) request.getAttribute("produtos");
                    if (produtos != null && !produtos.isEmpty()) {
                        for (Produtos produto : produtos) {
                %>
                
                    <tr>
                        <td><%=produto.getIdProduto()%></td>
                        <td><%=produto.getNome()%></td>
                        <td><%=produto.getQuantidade()%></td>
                        <td><%=produto.getPreco()%></td>
                        <td>
                            <a class="btn btn-primary btn-sm" href="ServletProdutoFC?acao=formAlterar&id=<%=produto.getIdProduto()%>"> Alterar </a>
                            <a class="btn btn-danger btn-sm" href="ServletProdutoFC?acao=excluir&id=<%=produto.getIdProduto()%>"> Excluir </a>
                        </td>
                    </tr>
                
                <%
                    }
                } else {
                %>
               
              </tbody>
            </table>

            <tr>
              <div>Nenhum produto encontrado!</div>
            </tr>
            
                <%
                    }
                %>
          </div>

          <div>
              <a class="btn btn-primary m-2" href="ServletProdutoFC?acao=formIncluir"> Novo Produto </a>
          </div>
        </body>

        </html>