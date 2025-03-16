<%-- 
    Document   : ProdutoDados
    Created on : 4 de mai. de 2024, 17:22:34
    Author     : gilvan
--%>

<%@page import="cadastroee.model.Produtos"%>
<%@page import="java.util.List"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <title>Cadastro de Produtos</title>
</head>
<body class="container">
    <%
        Produtos produto = (Produtos) request.getAttribute("produto");
        String acao = produto != null ? "alterar" : "incluir";
    %>

    <div>
        <h1><%=acao.equals("alterar") ? "Dados" : "Inclusão"%> do Produto</h1>
    </div>

    <div>
        <form class="form" action="ServletProdutoFC" method="post">
            <input type="hidden" name="acao" value="<%=acao%>">
                
            <% if (acao.equals("alterar")) { %>
                <input type="hidden" name="id" value="<%=produto.getIdProduto()%>">
            <% } %>

            <div class="mb-3">
                <label class="form-label" for="nome">Nome</label>
                <input class="form-control" type="text" name="nome" value="<%=produto != null ? produto.getNome() : ""%>" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="quantidade">Quantidade</label>
                <input class="form-control" type="text" name="quantidade" value="<%=produto != null ? produto.getQuantidade() : ""%>" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="preco">Preço de Venda</label>
                <input class="form-control" type="text" name="preco" value="<%=produto != null ? produto.getPreco() : ""%>" required>
            </div>

            <div>
                <input class="btn btn-primary" type="submit" value="<%=acao.equals("incluir") ? "Incluir" : "Alterar"%>">
            </div>
        </form>
    </div>
</body>
</html>