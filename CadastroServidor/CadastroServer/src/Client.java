/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

/**
 *
 * @author gilvan
 */

public class Client {

    public static void main(String[] args) {
        final String SERVER_ADDRESS = "localhost"; // Endereço do servidor
        final int PORT = 4321; // Porta do servidor

        try (
            Socket socket = new Socket(SERVER_ADDRESS, PORT);
            BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true)
        ) {
            System.out.println("Efetue o login:");

            // Lendo nome e senha do usuário
            System.out.print("Nome: ");
            String nome = userInput.readLine();
            System.out.print("Senha: ");
            String senha = userInput.readLine();

            // Enviando nome e senha ao servidor
            out.println(nome);
            out.println(senha);

            // Recebendo resposta do servidor
            String response = in.readLine();

            if (response.equals("OK")) {
                System.out.println("Usuario conectado com sucesso.");

                // Solicitando ao usuário enviar "L" para receber os produtos
                while (true) {
                    System.out.println("Digite 'L' para obter a listagem de produtos:");
                    String input = userInput.readLine();

                    if (input.equalsIgnoreCase("L")) {
                        out.println("L");

                        String produto;
                        while ((produto = in.readLine()) != null) {
                            if (produto.equals("")) {
                                System.out.println("Lista de produtos recebida.");
                                break;
                            }
                            System.out.println(produto);
                        }
                        break; 
                    } else {
                        System.out.println("Comando inválido.");
                    }
                }
            } else {
                System.out.println("Credenciais inválidas. Conexão encerrada.");
            }
        } catch (IOException e) {
            System.err.println("Erro no cliente: " + e.getMessage());
        }
    }
}
