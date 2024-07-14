package model;

/**
 *
 * @author gilvan
 */


import java.io.*;
import java.util.Scanner;

public class Main_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        PessoaFisicaRepo repoPessoaFisica = new PessoaFisicaRepo();
        PessoaJuridicaRepo repoPessoaJuridica = new PessoaJuridicaRepo();

        boolean continuar = true;
        while (continuar) {
            System.out.println("==========================");
            System.out.println("1 - Incluir Pessoa");
            System.out.println("2 - Alterar Pessoa");
            System.out.println("3 - Excluir Pessoa");
            System.out.println("4 - Buscar pelo Id");
            System.out.println("5 - Exibir Todos");
            System.out.println("6 - Persistir dados");
            System.out.println("7 - Recuperar dados");
            System.out.println("0 - Finalizar Programa");
            System.out.println("==========================");
            int opcao = scanner.nextInt();

            switch (opcao) {
                case 1 -> incluir(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 2 -> alterar(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 3 -> excluir(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 4 -> exibirPorId(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 5 -> exibirTodos(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 6 -> salvarDados(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 7 -> recuperarDados(scanner, repoPessoaFisica, repoPessoaJuridica);
                case 0 -> continuar = false;
                default -> System.out.println("Opcao invalida. Tente novamente.");
            }
        }
    }

    private static void incluir(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.println("Digite o ID da pessoa:");
        int id = scanner.nextInt();
        System.out.println("Insira os Dados...");

        if (tipo.equalsIgnoreCase("F")) {
            System.out.println("Nome:");
            String nome = scanner.next();
            System.out.println("CPF:");
            String cpf = scanner.next();
            System.out.println("Idade:");
            int idade = scanner.nextInt();
            PessoaFisica pessoaFisica = new PessoaFisica(id, nome, cpf, idade);
            repoPessoaFisica.inserir(pessoaFisica);
            pessoaFisica.exibir(); 
        } else if (tipo.equalsIgnoreCase("J")) {
            System.out.println("Nome:");
            String nome = scanner.next();
            System.out.println("CNPJ:");
            String cnpj = scanner.next();
            PessoaJuridica pessoaJuridica = new PessoaJuridica(id, nome, cnpj);
            repoPessoaJuridica.inserir(pessoaJuridica);
            pessoaJuridica.exibir(); 
        } else {
            System.out.println("Opcao invalida.");
        }
   }

    private static void alterar(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.println("Digite o ID da pessoa:");
        int id = scanner.nextInt();

        switch (tipo.toUpperCase()) {
            case "F" -> {
                PessoaFisica pessoaFisica = repoPessoaFisica.obter(id);
                if (pessoaFisica != null) {
                    System.out.println("Dados atuais:");
                    pessoaFisica.exibir();
                    
                    scanner.nextLine(); 
                    
                    System.out.println("Digite o novo nome:");
                    String nome = scanner.nextLine();
                    System.out.println("Digite o novo CPF:");
                    String cpf = scanner.nextLine();
                    System.out.println("Digite a nova idade:");
                    int idade = scanner.nextInt();
                    
                    pessoaFisica.setNome(nome);
                    pessoaFisica.setCpf(cpf);
                    pessoaFisica.setIdade(idade);
                    
                    repoPessoaFisica.alterar(pessoaFisica);
                    pessoaFisica.exibir();
                } else {
                    System.out.println("Pessoa fisica nao encontrada.");
                }
            }
            case "J" -> {
                PessoaJuridica pessoaJuridica = repoPessoaJuridica.obter(id);
                if (pessoaJuridica != null) {
                    System.out.println("Dados atuais:");
                    pessoaJuridica.exibir();
                    
                    scanner.nextLine();
                    
                    System.out.println("Digite o novo nome:");
                    String nome = scanner.nextLine();
                    System.out.println("Digite o novo CNPJ:");
                    String cnpj = scanner.nextLine();
                    
                    pessoaJuridica.setNome(nome);
                    pessoaJuridica.setCnpj(cnpj);
                    
                    repoPessoaJuridica.alterar(pessoaJuridica);
                    pessoaJuridica.exibir(); 
                } else {
                    System.out.println("Pessoa juridica nao encontrada.");
                }
            }
            default -> System.out.println("Opcao invalida.");
        }
    }

    private static void excluir(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.println("Digite o ID da pessoa:");
        int id = scanner.nextInt();
        
        switch (tipo.toUpperCase()) {
            case "F" -> repoPessoaFisica.excluir(id);
            case "J" -> repoPessoaJuridica.excluir(id);
            default -> System.out.println("Opcao invalida.");
        }
    }

    private static void exibirPorId(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.println("Digite o ID da pessoa:");
        int id = scanner.nextInt();

        switch (tipo.toUpperCase()) {
            case "F" -> {
                PessoaFisica pessoaFisica = repoPessoaFisica.obter(id);
                if (pessoaFisica != null) {
                    pessoaFisica.exibir();
                } else {
                    System.out.println("Pessoa fisica nao encontrada.");
                }
            }
            case "J" -> {
                PessoaJuridica pessoaJuridica = repoPessoaJuridica.obter(id);
                if (pessoaJuridica != null) {
                    pessoaJuridica.exibir();
                } else {
                    System.out.println("Pessoa juridica nao encontrada.");
                }
            }
            default -> System.out.println("Opcao invalida.");
        }
    }

    private static void exibirTodos(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        switch (tipo.toUpperCase()) {
            case "F" -> {
                System.out.println("Pessoas Fisicas:");
                for (PessoaFisica pessoa : repoPessoaFisica.obterTodos()) {
                    pessoa.exibir();
                }
            }
            case "J" -> {
                System.out.println("Pessoas Juridicas:");
                for (PessoaJuridica pessoa : repoPessoaJuridica.obterTodos()) {
                    pessoa.exibir();
                }
            }
            default -> System.out.println("Opcao invalida.");
        }
    }

    private static void salvarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        try {
            System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
            String prefixo = scanner.next();
            repoPessoaFisica.persistir(prefixo + ".fisica.bin");
            repoPessoaJuridica.persistir(prefixo + ".juridica.bin");
            System.out.println("Dados salvos com sucesso.");
        } catch (IOException e) {
            System.out.println("Erro ao salvar os dados: " + e.getMessage());
        }
    }

    private static void recuperarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        try {
            System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
            String prefixo = scanner.next();
            repoPessoaFisica.recuperar(prefixo + ".fisica.bin");
            repoPessoaJuridica.recuperar(prefixo + ".juridica.bin");
            System.out.println("Dados recuperados com sucesso.");
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Erro ao recuperar os dados: " + e.getMessage());
        }
    }
}
