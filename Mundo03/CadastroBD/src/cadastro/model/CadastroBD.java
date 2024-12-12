/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package cadastro.model;

import cadastrobd.model.PessoaFisica;
import cadastrobd.model.PessoaJuridica;
import java.util.List;
import java.util.Scanner;

/**
 *
 * @author gilvan
 */

public class CadastroBD {
    
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            PessoaFisicaDAO pessoaFisicaDAO = new PessoaFisicaDAO();
            PessoaJuridicaDAO pessoaJuridicaDAO = new PessoaJuridicaDAO();
            
            int opcao;
            do {
                System.out.println("===========================");
                System.out.println("1 - Incluir Pessoa");
                System.out.println("2 - Alterar Pessoa");
                System.out.println("3 - Excluir Pessoa");
                System.out.println("4 - Buscar pelo ID");
                System.out.println("5 - Exibir todos");
                System.out.println("0 - Finalizar Programa");
                System.out.println("===========================");
                opcao = scanner.nextInt();
                
                switch (opcao) {
                    case 1 -> incluir(scanner, pessoaFisicaDAO, pessoaJuridicaDAO);
                    case 2 -> alterar(scanner, pessoaFisicaDAO, pessoaJuridicaDAO);
                    case 3 -> excluir(scanner, pessoaFisicaDAO, pessoaJuridicaDAO);
                    case 4 -> obter(scanner, pessoaFisicaDAO, pessoaJuridicaDAO);
                    case 5 -> obterTodos(scanner, pessoaFisicaDAO, pessoaJuridicaDAO);
                    case 0 -> System.out.println("Programa finalizado.");
                    default -> System.out.println("Opcao invalida.");
                }
            } while (opcao != 0);
        }
    }

    private static void incluir(Scanner scanner, PessoaFisicaDAO pessoaFisicaDAO, PessoaJuridicaDAO pessoaJuridicaDAO) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        try {
            switch (tipo.toUpperCase()) {
                case "F" -> {
                    System.out.println("Cadastro de Pessoa Fisica:");
                    PessoaFisica pessoaFisica = lerDadosPessoaFisica(scanner);
                    pessoaFisicaDAO.incluir(pessoaFisica);
                    System.out.println("Pessoa fisica incluida com sucesso...");
                    System.out.println("===========================");
                }
                case "J" -> {
                    System.out.println("Cadastro de Pessoa Juridica:");
                    PessoaJuridica pessoaJuridica = lerDadosPessoaJuridica(scanner);
                    pessoaJuridicaDAO.incluir(pessoaJuridica);
                    System.out.println("Pessoa juridica incluida com sucesso...");
                    System.out.println("===========================");
                }
                default -> System.out.println("Tipo de pessoa invalido.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao tentar incluir a pessoa: " + e.getMessage());
        }
    }

    private static PessoaFisica lerDadosPessoaFisica(Scanner scanner) {
        PessoaFisica pessoaFisica = new PessoaFisica();
        scanner.nextLine(); 
        System.out.print("Nome: ");
        pessoaFisica.setNome(scanner.nextLine());
        System.out.print("Logradouro: ");
        pessoaFisica.setLogradouro(scanner.nextLine());
        System.out.print("Cidade: ");
        pessoaFisica.setCidade(scanner.nextLine());
        System.out.print("Estado: ");
        pessoaFisica.setEstado(scanner.nextLine());
        System.out.print("Telefone: ");
        pessoaFisica.setTelefone(scanner.nextLine());
        System.out.print("Email: ");
        pessoaFisica.setEmail(scanner.nextLine());
        System.out.print("CPF: ");
        pessoaFisica.setCpf(scanner.nextLine());
        return pessoaFisica;
    }

    private static PessoaJuridica lerDadosPessoaJuridica(Scanner scanner) {
        PessoaJuridica pessoaJuridica = new PessoaJuridica();
        scanner.nextLine(); 
        System.out.print("Nome: ");
        pessoaJuridica.setNome(scanner.nextLine());
        System.out.print("Logradouro: ");
        pessoaJuridica.setLogradouro(scanner.nextLine());
        System.out.print("Cidade: ");
        pessoaJuridica.setCidade(scanner.nextLine());
        System.out.print("Estado: ");
        pessoaJuridica.setEstado(scanner.nextLine());
        System.out.print("Telefone: ");
        pessoaJuridica.setTelefone(scanner.nextLine());
        System.out.print("Email: ");
        pessoaJuridica.setEmail(scanner.nextLine());
        System.out.print("CNPJ: ");
        pessoaJuridica.setCnpj(scanner.nextLine());
        return pessoaJuridica;
    }

    private static void alterar(Scanner scanner, PessoaFisicaDAO pessoaFisicaDAO, PessoaJuridicaDAO pessoaJuridicaDAO) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.print("Digite o ID da pessoa: ");
        int id = scanner.nextInt();

        try {
            switch (tipo.toUpperCase()) {
                case "F" -> {
                    PessoaFisica pessoaFisica = pessoaFisicaDAO.getPessoa(id);
                    if (pessoaFisica != null) {
                        System.out.println("Dados atuais da Pessoa Fisica:");
                        System.out.println(pessoaFisica);

                        PessoaFisica novosDados = lerDadosPessoaFisica(scanner);
                        novosDados.setId(id);
                        pessoaFisicaDAO.alterar(novosDados);
                        System.out.println("Pessoa física alterada com sucesso.");
                    } else {
                        System.out.println("Pessoa fisica nao encontrada.");
                    }
                }
                case "J" -> {
                    PessoaJuridica pessoaJuridica = pessoaJuridicaDAO.getPessoa(id);
                    if (pessoaJuridica != null) {
                        System.out.println("Dados atuais da Pessoa Juridica:");
                        System.out.println(pessoaJuridica);

                        PessoaJuridica novosDados = lerDadosPessoaJuridica(scanner);
                        novosDados.setId(id);
                        pessoaJuridicaDAO.alterar(novosDados);
                        System.out.println("Pessoa juridica alterada com sucesso.");
                    } else {
                        System.out.println("Pessoa juridica nao encontrada.");
                    }
                }
                default -> System.out.println("Tipo de pessoa invalido.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao tentar alterar a pessoa: " + e.getMessage());
        }
    }

    private static void excluir(Scanner scanner, PessoaFisicaDAO pessoaFisicaDAO, PessoaJuridicaDAO pessoaJuridicaDAO) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.print("Digite o ID da pessoa: ");
        int id = scanner.nextInt();

        try {
            switch (tipo.toUpperCase()) {
                case "F" -> {
                    pessoaFisicaDAO.excluir(id);
                    System.out.println("Pessoa fisica excluida com sucesso.");
                }
                case "J" -> {
                    pessoaJuridicaDAO.excluir(id);
                    System.out.println("Pessoa juridica excluida com sucesso.");
                }
                default -> System.out.println("Tipo de pessoa invalido.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao tentar excluir a pessoa: " + e.getMessage());
        }
    }

    private static void obter(Scanner scanner, PessoaFisicaDAO pessoaFisicaDAO, PessoaJuridicaDAO pessoaJuridicaDAO) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        System.out.print("Digite o ID da pessoa: ");
        int id = scanner.nextInt();

        try {
            switch (tipo.toUpperCase()) {
                case "F" -> {
                    PessoaFisica pessoaFisica = pessoaFisicaDAO.getPessoa(id);
                    if (pessoaFisica != null) {
                        System.out.println("Pessoa fisica encontrada:");
                        System.out.println(pessoaFisica);
                    } else {
                        System.out.println("Pessoa fisica nao encontrada.");
                    }
                }
                case "J" -> {
                    PessoaJuridica pessoaJuridica = pessoaJuridicaDAO.getPessoa(id);
                    if (pessoaJuridica != null) {
                        System.out.println("Pessoa juridica encontrada:");
                        System.out.println(pessoaJuridica);
                    } else {
                        System.out.println("Pessoa juridica nao encontrada.");
                    }
                }
                default -> System.out.println("Tipo de pessoa invalido.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao tentar buscar a pessoa: " + e.getMessage());
        }
    }

    private static void obterTodos(Scanner scanner, PessoaFisicaDAO pessoaFisicaDAO, PessoaJuridicaDAO pessoaJuridicaDAO) {
        System.out.println("F - Pessoa Fisica | J - Pessoa Juridica");
        String tipo = scanner.next();

        try {
            switch (tipo.toUpperCase()) {
                case "F" -> {
                    List<PessoaFisica> pessoasFisicas = pessoaFisicaDAO.getPessoas();
                    System.out.println("Exibindo dados de Pessoa Fisica...");
                    System.out.println("===========================");
                    for (PessoaFisica pf : pessoasFisicas) {
                        System.out.println("Id: " + pf.getId());
                        System.out.println("Nome: " + pf.getNome());
                        System.out.println("Logradouro: " + pf.getLogradouro());
                        System.out.println("Cidade: " + pf.getCidade());
                        System.out.println("Estado: " + pf.getEstado());
                        System.out.println("Telefone: " + pf.getTelefone());
                        System.out.println("E-mail: " + pf.getEmail());
                        System.out.println("CPF: " + pf.getCpf());
                    }
                }
                case "J" -> {
                    List<PessoaJuridica> pessoasJuridicas = pessoaJuridicaDAO.getPessoas();
                    System.out.println("Exibindo dados de Pessoa Juridica...");
                    System.out.println("===========================");
                    for (PessoaJuridica pj : pessoasJuridicas) {
                        System.out.println("Id: " + pj.getId());
                        System.out.println("Nome: " + pj.getNome());
                        System.out.println("Logradouro: " + pj.getLogradouro());
                        System.out.println("Cidade: " + pj.getCidade());
                        System.out.println("Estado: " + pj.getEstado());
                        System.out.println("Telefone: " + pj.getTelefone());
                        System.out.println("E-mail: " + pj.getEmail());
                        System.out.println("CNPJ: " + pj.getCnpj());
                    }
                }
                default -> System.out.println("Tipo de pessoa invalido.");
            }
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao tentar exibir as pessoas: " + e.getMessage());
        }
    }
}
