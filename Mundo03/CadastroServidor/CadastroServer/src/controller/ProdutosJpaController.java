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
import model.Produtos;

/**
 *
 * @author gilvan
 */

public class ProdutosJpaController {
    
    private final EntityManagerFactory emf;
    
    public ProdutosJpaController() {
        emf = Persistence.createEntityManagerFactory("CadastroServerPU");
    }
    
    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public List<Produtos> findProdutos() {
        EntityManager em = getEntityManager();
        try {
            Query query = em.createQuery("SELECT p FROM Produtos p");
            return query.getResultList();
        } finally {
            em.close();
        }
    }
    
    public Produtos findProduto(int idProduto) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Produtos.class, idProduto);
        } finally {
            em.close();
        }
    }
    
    public void edit(Produtos produto) {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            produto = em.merge(produto);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }
}
