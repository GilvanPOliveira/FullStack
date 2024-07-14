/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastroserver;

import controller.MovimentoJpaController;
import controller.PessoasJpaController;
import controller.ProdutosJpaController;
import controller.UsuariosJpaController;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import model.Movimento;
import model.Produtos;
import model.Usuarios;

/**
 *
 * @author gilvan
 */

public class CadastroThreadV2 extends Thread {

    private final ProdutosJpaController ctrlProd;
    private final UsuariosJpaController ctrlUsu;
    private final MovimentoJpaController ctrlMov;
    private final PessoasJpaController ctrlPessoa;
    private final Socket s1;

    public CadastroThreadV2(ProdutosJpaController ctrlProd, UsuariosJpaController ctrlUsu, MovimentoJpaController ctrlMov, PessoasJpaController ctrlPessoa, Socket s1) {
        this.ctrlProd = ctrlProd;
        this.ctrlUsu = ctrlUsu;
        this.ctrlMov = ctrlMov;
        this.ctrlPessoa = ctrlPessoa;
        this.s1 = s1;
    }

@Override
public void run() {
    Usuarios usuario = null;

    try (ObjectOutputStream out = new ObjectOutputStream(s1.getOutputStream());
         ObjectInputStream in = new ObjectInputStream(s1.getInputStream())) {

        boolean loggedIn = false;

        while (!loggedIn) {
            System.out.println("Aguardando autenticação do usuário...");
            String nome = (String) in.readObject();
            String senha = (String) in.readObject();

            usuario = ctrlUsu.findUsuario(nome, senha);

            if (usuario == null) {
                out.writeObject("Credenciais inválidas. Tente novamente.");
            } else {
                out.writeObject("Usuário conectado com sucesso");
                loggedIn = true;
                System.out.println("Usuário conectado com sucesso.");
            }
        }

        while (true) {
            System.out.println("Aguardando comando do cliente...");
            String comando = (String) in.readObject();

            switch (comando) {
                case "L":
                    System.out.println("Enviando lista de produtos ao cliente...");
                    out.writeObject(ctrlProd.findProdutos());
                    System.out.println("Lista de produtos enviada ao cliente.");
                    break;

                case "E":
                case "S":
                    System.out.println("Recebendo dados de movimento do cliente...");

                    int idPessoa = (int) in.readObject();
                    int idProduto = (int) in.readObject();
                    int quantidade = (int) in.readObject();
                    float valorUnitario = (float) in.readObject();

                    Movimento movimento = new Movimento();
                    movimento.setIdUsuario(usuario);
                    movimento.setTipo(comando);
                    movimento.setIdPessoa(ctrlPessoa.findPessoa(idPessoa));
                    movimento.setIdProduto(ctrlProd.findProduto(idProduto));
                    movimento.setQuantidade(quantidade);
                    movimento.setValorUnitario(valorUnitario);

                    ctrlMov.create(movimento);
                    Produtos produto = ctrlProd.findProduto(idProduto);

                    if (comando.equals("E")) {
                        produto.setQuantidade(produto.getQuantidade() + quantidade);
                    } else {
                        produto.setQuantidade(produto.getQuantidade() - quantidade);
                    }
                    ctrlProd.edit(produto);

                    out.writeObject("Movimento processado com sucesso.");
                    System.out.println("Movimento processado com sucesso.");
                    break;
                    
                case "X":
                    System.out.println("Encerrando conexão...");
                    out.writeObject("Sistema finalizado pelo cliente.");
                    s1.close(); // Fecha o socket
                    System.exit(0); // Encerra o programa servidor
                    break;

                default:
                    out.writeObject("Comando inválido.");
                    System.out.println("Comando inválido.");
                    break;
            }
        }
    } catch (IOException | ClassNotFoundException e) {
        //System.err.println("Erro no servidor (CadastroThreadV2): " + e.getMessage());
        //e.printStackTrace();
    }
}

}
