/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastroclient;

import java.io.EOFException;
import java.io.IOException;
import java.io.ObjectInputStream;
import javax.swing.JTextArea;
import javax.swing.SwingUtilities;
import java.util.List;
import model.Produtos;

/**
 *
 * @author gilvan
 */

public class ThreadClient extends Thread {

    private final ObjectInputStream entrada;
    private final JTextArea textArea;

    public ThreadClient(ObjectInputStream entrada, JTextArea textArea) {
        this.entrada = entrada;
        this.textArea = textArea;
    }

    @Override
    public void run() {
        
        try {
           while (true) {
               Object obj = entrada.readObject();

               if (obj instanceof String mensagem) {
                   SwingUtilities.invokeLater(() -> textArea.append(mensagem + "\n"));

               } else if (obj instanceof List<?>) {
                   @SuppressWarnings("unchecked")
                   List<Produtos> lista = (List<Produtos>) obj;

                   if (!lista.isEmpty()) {
                       SwingUtilities.invokeLater(() -> {
                           textArea.append("\n" + "\nLista de Produtos:\n");

                           for (Produtos produto : lista) {
                               textArea.append("ID: " + produto.getIdProduto()
                                       + "  |  " + "Nome: " + produto.getNome()
                                       + "  |  " + " Quantidade: " + produto.getQuantidade()
                                       + "  |  " + " Preço: " + produto.getPreco() + "\n");
                           }
                           textArea.append("\n");
                       });
                   }
               }
           } 
       } catch (EOFException e) {
            System.out.println("Conexão fechada pelo servidor.");

       } catch (IOException | ClassNotFoundException e) {
          // System.err.println("Erro no servidor (ThreadClient): " + e.getMessage());
           //e.printStackTrace();
       }
    }
}