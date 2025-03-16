/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import model.Movimento;

/**
 *
 * @author gilvan
 */

public class MovimentoJpaController {
    
    private final EntityManagerFactory emf;
    
    public MovimentoJpaController() {
        emf = Persistence.createEntityManagerFactory("CadastroServerPU");
    }
    
    public void create(Movimento movimento) {
        EntityManager em = null;
        try {
            em = emf.createEntityManager();
            em.getTransaction().begin();
            em.persist(movimento);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }
}