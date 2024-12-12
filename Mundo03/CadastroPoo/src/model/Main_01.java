package model;

/**
 *
 * @author gilvan
 */

import java.io.*;


public class Main_01 {
    public static void main(String[] args) {
        try {
            //Instanciando repo1
            PessoaFisicaRepo repo1 = new PessoaFisicaRepo();

            //Adicionando duas pessoas fisicas
            PessoaFisica pessoaFisica1 = new PessoaFisica(1, "Ana", "111.111.111-11", 25);
            PessoaFisica pessoaFisica2 = new PessoaFisica(2, "Carlos", "222.222.222-22", 52);
            repo1.inserir(pessoaFisica1);
            repo1.inserir(pessoaFisica2);

            //Persistindo os dados em repo1
            repo1.persistir("pessoasFisicas.dat");
            System.out.println("Dados de Pessoas Fisica Armazenados.");

            //Instanciando repo2
            PessoaFisicaRepo repo2 = new PessoaFisicaRepo();

            //Recuperando os dados em repo2
            repo2.recuperar("pessoasFisicas.dat");

            //Exibindo os dados recuperados das pessoas fisicas
            System.out.println("Dados de Pessoas Fisica Recuperados.");
            for (PessoaFisica pessoa : repo2.obterTodos()) {
                pessoa.exibir();
            }

            //Instanciando repo3
            PessoaJuridicaRepo repo3 = new PessoaJuridicaRepo();

            //Adicionando duas pessoas jurídicas
            PessoaJuridica pessoaJuridica1 = new PessoaJuridica(3, "XPTO Sales", "33.333.333/3333-33");
            PessoaJuridica pessoaJuridica2 = new PessoaJuridica(4, "XPTO Solutions", "44.444.444/4444-44");
            repo3.inserir(pessoaJuridica1);
            repo3.inserir(pessoaJuridica2);

            //Persistindo os dados em repo3
            repo3.persistir("pessoasJuridicas.dat");
            System.out.println("Dados de Pessoas Juridica Armazenados.");

            //Instanciando repo4
            PessoaJuridicaRepo repo4 = new PessoaJuridicaRepo();

            //Recuperando os dados em repo4
            repo4.recuperar("pessoasJuridicas.dat");

            //Exibindo os dados recuperados das pessoas juridicas
            System.out.println("Dados de Pessoas Juridica Recuperados.");
            for (PessoaJuridica pessoa : repo4.obterTodos()) {
                pessoa.exibir();
            }
        } catch (IOException | ClassNotFoundException e) {
        }
    }
}