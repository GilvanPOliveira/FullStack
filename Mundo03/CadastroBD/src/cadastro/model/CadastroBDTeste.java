/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cadastro.model;

import cadastrobd.model.PessoaJuridica;
import cadastrobd.model.PessoaFisica;

/**
 *
 * @author gilvan
 */

public class CadastroBDTeste {
    public static void main(String[] args) {
        PessoaFisicaDAO pessoaFisicaDAO = new PessoaFisicaDAO();
        PessoaJuridicaDAO pessoaJuridicaDAO = new PessoaJuridicaDAO();

        // Inclusão de Pessoa Fisica
        PessoaFisica pessoaFisica = new PessoaFisica();
        pessoaFisica.setNome("Joao da Silva");
        pessoaFisica.setLogradouro("Rua 10, casa 6, Quitanda");
        pessoaFisica.setCidade("Riacho do Leste");
        pessoaFisica.setEstado("PA");
        pessoaFisica.setTelefone("3333-3333");
        pessoaFisica.setEmail("joao.silva@riacho.com");
        pessoaFisica.setCpf("33333333333");

        pessoaFisicaDAO.incluir(pessoaFisica);
        System.out.println("Pessoa fisica criada:");
        pessoaFisica.exibir();

        // Inclusão de Pessoa Juridica
        PessoaJuridica pessoaJuridica = new PessoaJuridica();
        pessoaJuridica.setNome("JJCSilva");
        pessoaJuridica.setLogradouro("Rua 13, Centro");
        pessoaJuridica.setCidade("Riacho do Oeste");
        pessoaJuridica.setEstado("PA");
        pessoaJuridica.setTelefone("4444-4444");
        pessoaJuridica.setEmail("jjc.silva@riacho.com");
        pessoaJuridica.setCnpj("44444444444444");

        pessoaJuridicaDAO.incluir(pessoaJuridica);
        System.out.println("Pessoa juridica criada:");
        pessoaJuridica.exibir();

        // Consulta todas as pessoas físicas
        System.out.println("\nPessoas Fisicas:");
        for (PessoaFisica pf : pessoaFisicaDAO.getPessoas()) {
            pf.exibir();
            System.out.println();
        }

        // Consulta todas as pessoas jurídicas
        System.out.println("\nPessoas Juridicas:");
        for (PessoaJuridica pj : pessoaJuridicaDAO.getPessoas()) {
            pj.exibir();
            System.out.println();
        }

        // Exclui a pessoa física e jurídica criadas
        pessoaFisicaDAO.excluir(pessoaFisica.getId());
        pessoaJuridicaDAO.excluir(pessoaJuridica.getId());
    }
}
