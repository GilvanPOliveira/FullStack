/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastroserver;

import controller.ProdutosJpaController;
import controller.UsuariosJpaController;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import model.Usuarios;

/**
 *
 * @author gilvan
 */

public class CadastroThread extends Thread {

    private final ProdutosJpaController ctrl;
    private final UsuariosJpaController ctrlUsu;
    private final Socket s1;

    public CadastroThread(ProdutosJpaController ctrl, UsuariosJpaController ctrlUsu, Socket s1) {
        this.ctrl = ctrl;
        this.ctrlUsu = ctrlUsu;
        this.s1 = s1;
    }

    @Override
    public void run() {
        
        try (ObjectOutputStream out = new ObjectOutputStream(s1.getOutputStream());
             ObjectInputStream in = new ObjectInputStream(s1.getInputStream())) {

            boolean loggedIn = false;

            while (!loggedIn) {
                
                // Obtendo login e senha do cliente
                String nome = (String) in.readObject();
                String senha = (String) in.readObject();

                // Verificando as credenciais do usuário
                Usuarios usuario = ctrlUsu.findUsuario(nome, senha);

                if (usuario == null) {
                    out.writeObject("Credenciais inválidas. Tente novamente.");
                    
                } else {
                    out.writeObject("Usuario conectado com sucesso");
                    loggedIn = true; // Marca como logado e sai do loop
                }
            }

            boolean listagemCorreta = false;

            while (!listagemCorreta) {
                String comando = (String) in.readObject();

                if (comando.equals("L")) {
                    listagemCorreta = true; // Sai do loop se o comando for "L"
                    
                    // Enviando lista de produtos ao cliente
                    out.writeObject("Listagem dos Produtos:");
                    
                    for (model.Produtos produto : ctrl.findProdutos()) {
                        out.writeObject(produto.getNome());
                    }
                    
                    // Indicando fim da listagem
                    out.writeObject("");
                    
                } else {
                    out.writeObject("Comando inválido.");
                    out.writeObject("Digite 'L' para listar os produtos.");
                }
            }
        } catch (IOException | ClassNotFoundException e) {
            //e.printStackTrace();
        }
    }
}
