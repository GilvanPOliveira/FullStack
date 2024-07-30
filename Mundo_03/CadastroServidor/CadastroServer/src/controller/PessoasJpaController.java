/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package controller;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import model.Pessoas;

/**
 *
 * @author gilvan
 */

public class PessoasJpaController {
    
    private final EntityManagerFactory emf;
    
    public PessoasJpaController() {
        emf = Persistence.createEntityManagerFactory("CadastroServerPU");
    }
    
    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public Pessoas findPessoa(int idPessoa) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Pessoas.class, idPessoa);
        } finally {
            em.close();
        }
    }
}
