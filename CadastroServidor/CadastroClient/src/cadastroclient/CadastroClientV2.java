/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cadastroclient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

/**
 *
 * @author gilvan
 */

public class CadastroClientV2 {

    public static void main(String[] args) {
        
        try {
            Socket socket = new Socket("localhost", 4321);
            ObjectOutputStream outputStream = new ObjectOutputStream(socket.getOutputStream());
            ObjectInputStream inputStream = new ObjectInputStream(socket.getInputStream());
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

            boolean loggedIn = false;

            System.out.println("Efetue o Login para ter acesso ao sistema");

            while (!loggedIn) {
                // Solicitar nome de usuário e senha
                System.out.print("Nome do usuário: ");
                String nomeUsuario = reader.readLine();
                System.out.print("Senha do usuário: ");
                String senha = reader.readLine();

                // Enviar credenciais para o servidor
                outputStream.writeObject(nomeUsuario);
                outputStream.writeObject(senha);

                // Receber resposta do servidor
                String resposta = (String) inputStream.readObject();

                if (resposta.equals("Usuário conectado com sucesso")) {
                    loggedIn = true;

                    System.out.println("\nUsuário conectado com sucesso");

                    // Instanciar a janela para apresentação das mensagens
                    SaidaFrame frame = new SaidaFrame();
                    frame.setVisible(true);
                    frame.setTexto(resposta); // Definir a mensagem de sucesso na SaidaFrame

                    // Criar e iniciar a Thread para preenchimento assíncrono das mensagens
                    ThreadClient thread = new ThreadClient(inputStream, frame.texto);
                    thread.start();

                } else {
                    System.out.println(resposta); // Exibir mensagem de erro no Terminal
                }
            }

            // Menu de interação com o servidor
            while (true) {
                System.out.println("\nEscolha uma opção: ");
                System.out.println("L – Listar |  X - Finalizar | E – Entrada | S – Saída\n");

                String comando = reader.readLine();

                switch (comando.toUpperCase()) {
                    case "L" -> 
                        outputStream.writeObject("L");
                        
                    case "E", "S" -> {
                        // Enviar comando para o servidor
                        outputStream.writeObject(comando);

                        // Obter dados do usuário
                        System.out.print("ID da pessoa: ");
                        int idPessoa = Integer.parseInt(reader.readLine());
                        System.out.print("ID do produto: ");
                        int idProduto = Integer.parseInt(reader.readLine());
                        System.out.print("Quantidade: ");
                        int quantidade = Integer.parseInt(reader.readLine());
                        System.out.print("Valor unitário: ");
                        float valorUnitario = Float.parseFloat(reader.readLine());

                        // Enviar dados para o servidor
                        outputStream.writeObject(idPessoa);
                        outputStream.writeObject(idProduto);
                        outputStream.writeObject(quantidade);
                        outputStream.writeObject(valorUnitario);
                    }
                    case "X" -> {
                        System.out.println("Sistema finalizado.");
                        outputStream.writeObject("X"); 
                        socket.close(); // Fecha o socket
                        System.exit(0); // Encerra o programa cliente
                    }

                    default -> System.out.println("Comando inválido.");
                }
            }
        } catch (IOException | ClassNotFoundException e) {
            System.err.println("Erro no servidor (CadastroClientV2): " + e.getMessage());
            e.printStackTrace();
        }
    }
}
