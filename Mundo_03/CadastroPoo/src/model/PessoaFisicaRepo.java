package model;

/**
 *
 * @author gilvan
 */

import java.io.*;
import java.util.ArrayList;

public class PessoaFisicaRepo {
    private ArrayList<PessoaFisica> pessoas = new ArrayList<>();
    
    public void inserir(PessoaFisica pessoa) {
        pessoas.add(pessoa);
    }
    
    public void alterar(PessoaFisica pessoa) {
        for (int i = 0; i < pessoas.size(); i++) {
            if (pessoas.get(i).getId() == pessoa.getId()) {
                pessoas.set(i, pessoa);
                break;
            }
        }
    }
    
    public void excluir(int id) {
        for (int i = 0; i < pessoas.size(); i++) {
            if (pessoas.get(i).getId() == id) {
                pessoas.remove(i);
                break;
            }
        }
    }
    
    public PessoaFisica obter(int id) {
        for (PessoaFisica pessoa : pessoas) {
            if (pessoa.getId() == id) {
                return pessoa;
            }
        }
        return null;
    }
    
    public ArrayList<PessoaFisica> obterTodos() {
        return pessoas;
    }
    
    public void persistir(String nomeArquivo) throws IOException {
        FileOutputStream fileOut = new FileOutputStream(nomeArquivo);
        try (ObjectOutputStream objectOut = new ObjectOutputStream(fileOut)) {
            objectOut.writeObject(pessoas);
        }
    }
    
    public void recuperar(String nomeArquivo) throws IOException, ClassNotFoundException {
        FileInputStream fileIn = new FileInputStream(nomeArquivo);
        try (ObjectInputStream objectIn = new ObjectInputStream(fileIn)) {
            pessoas = (ArrayList<PessoaFisica>) objectIn.readObject();
        }
    }

}
