/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastroclient;

import javax.swing.JDialog;
import javax.swing.JTextArea;

/**
 *
 * @author gilvan
 */

public class SaidaFrame extends JDialog {
    
    final JTextArea texto;

    public SaidaFrame() {
        setTitle("Mensagens do Servidor");
        setBounds(100, 100, 400, 300);
        setModal(false);
        texto = new JTextArea();
        getContentPane().add(texto);
    }

    public void setTexto(String mensagem) {
        texto.setText(mensagem);
    }
}