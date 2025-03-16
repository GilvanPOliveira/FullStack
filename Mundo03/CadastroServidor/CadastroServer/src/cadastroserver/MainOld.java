/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastroserver;

import controller.ProdutosJpaController;
import controller.UsuariosJpaController;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

/**
 *
 * @author gilvan
 */

public class MainOld {

    public static void main(String[] args) {

        ProdutosJpaController ctrl = new ProdutosJpaController();
        UsuariosJpaController ctrlUsu = new UsuariosJpaController();

        try (ServerSocket serverSocket = new ServerSocket(4321)) {
            System.out.println("Servidor esperando por conexoes...");

            while (true) {
                Socket clientSocket = serverSocket.accept();

                // Instanciando uma nova Thread para tratar a conexão do cliente
                CadastroThread thread = new CadastroThread(ctrl, ctrlUsu, clientSocket);
                thread.start();
                
            }
        } catch (IOException e) {
            System.err.println("Erro no servidor: " + e.getMessage());
        }
    }
}
