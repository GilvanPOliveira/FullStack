package cadastroee.servlets;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import cadastroee.controller.ProdutosFacadeLocal;
import cadastroee.model.Produtos;
import jakarta.ejb.EJB;
import java.io.IOException;
import java.util.List;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author gilvan
 */


@WebServlet(name = "ServletProdutoFC", urlPatterns = {"/ServletProdutoFC"})
public class ServletProdutoFC extends HttpServlet {

    @EJB
    private ProdutosFacadeLocal facade;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String acao = request.getParameter("acao");
        
        if (acao == null || acao.isEmpty()) {
            acao = "listar";
        }
        
        switch (acao) {
            case "excluir":
                excluirProdutos(request, response);
                break;
            case "formAlterar":
                formAlterar(request, response);
                break;
            case "formIncluir":
                formIncluir(request, response);
                break;
            default:
                listarProdutos(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String acao = request.getParameter("acao");
        
        if (acao != null && !acao.isEmpty()) {
            switch (acao) {
                case "incluir":
                    incluirProdutos(request, response);
                    break;
                case "alterar":
                    alterarProdutos(request, response);
                    break;
            }
        } else {
            response.sendRedirect("ServletProdutoFC");
        }
    }

    private void listarProdutos(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Produtos> produtos = facade.findAll();
        request.setAttribute("produtos", produtos);
        RequestDispatcher dispatcher = request.getRequestDispatcher("ProdutoLista.jsp");
        dispatcher.forward(request, response);
    }

    private void excluirProdutos(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            int idExcluir = Integer.parseInt(request.getParameter("id"));
            facade.remove(facade.find(idExcluir));
            response.sendRedirect("ServletProdutoFC");
        } catch (NumberFormatException | NullPointerException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    private void formAlterar(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            int idAlterar = Integer.parseInt(request.getParameter("id"));
            Produtos produto = facade.find(idAlterar);
            request.setAttribute("produto", produto);
            RequestDispatcher dispatcher = request.getRequestDispatcher("ProdutoDados.jsp");
            dispatcher.forward(request, response);
        } catch (NumberFormatException | NullPointerException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    private void incluirProdutos(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String nome = request.getParameter("nome");
            int quantidade = Integer.parseInt(request.getParameter("quantidade"));
            Float preco = Float.valueOf(request.getParameter("preco"));

            Produtos produtoNovo = new Produtos();
            produtoNovo.setNome(nome);
            produtoNovo.setQuantidade(quantidade);
            produtoNovo.setPreco(preco);

            facade.create(produtoNovo);
            response.sendRedirect("ServletProdutoFC");
        } catch (NumberFormatException | NullPointerException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
    }
}

    
    private void alterarProdutos(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            int id = Integer.parseInt(request.getParameter("id"));
            String nome = request.getParameter("nome");
            int quantidade = Integer.parseInt(request.getParameter("quantidade"));
            Float preco = Float.valueOf(request.getParameter("preco"));

            Produtos produtoAlterado = facade.find(id);
            produtoAlterado.setNome(nome);
            produtoAlterado.setQuantidade(quantidade);
            produtoAlterado.setPreco(preco);

            facade.edit(produtoAlterado); 
            response.sendRedirect("ServletProdutoFC");
        } catch (NumberFormatException | NullPointerException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    private void formIncluir(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatcher = request.getRequestDispatcher("ProdutoDados.jsp");
        dispatcher.forward(request, response);
    }
}