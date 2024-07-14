/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

/**
 *
 * @author gilvan
 */

public class Server {
    
public static void main(String[] args) {
        final int PORT = 4321; // Porta para conexão

        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            System.out.println("Servidor esperando por conexoes...");

            while (true) {
                Socket clientSocket = serverSocket.accept();

                BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

                // Recebendo nome e senha do cliente
                String nome = in.readLine();
                String senha = in.readLine();

                // Verificando as credenciais
                if (nome.equalsIgnoreCase("op1") && senha.equalsIgnoreCase("op1")) {
                    
                    System.out.println("Credenciais validas. Aguardando requisicoes...");
                    // Enviando confirmação ao cliente
                    out.println("OK");

                    String request;
                    while ((request = in.readLine()) != null) {
                        if (request.equalsIgnoreCase("L")) {
                            out.println("Listagem de produtos:");
                            out.println("Produto 1");
                            out.println("Produto 2");
                            out.println("Produto 3");
                            clientSocket.close();
                            serverSocket.close();
                        }
                    }
                } else {
                    System.out.println("Credenciais invalidas. Desconectando cliente...");
                    out.println("Servidor finalizado.");
                    clientSocket.close();
                    serverSocket.close();
                }
            }
        } catch (IOException e) {
            System.err.println("Erro no servidor: " + e.getMessage());
        }
    }
}