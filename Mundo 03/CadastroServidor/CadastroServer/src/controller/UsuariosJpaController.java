/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package controller;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import model.Usuarios;

/**
 *
 * @author gilvan
 */

public class UsuariosJpaController {
    
  private final EntityManagerFactory emf;
    
    public UsuariosJpaController() {
        emf = Persistence.createEntityManagerFactory("CadastroServerPU");
    }
    
    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public Usuarios findUsuario(String nome, String senha) {
        EntityManager em = getEntityManager();
        try {
            Query query = em.createQuery("SELECT u FROM Usuarios u WHERE u.nome = :nome AND u.senha = :senha");
            query.setParameter("nome", nome);
            query.setParameter("senha", senha);
            List<Usuarios> resultList = query.getResultList();
            if (!resultList.isEmpty()) {
                return resultList.get(0); // Retorna o primeiro usuário encontrado
            }
            return null; 
        } finally {
            em.close();
        }
    }
}
