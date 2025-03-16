/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package cadastroee.controller;

import cadastroee.model.Produtos;
import java.util.List;
import jakarta.ejb.Local;

/**
 *
 * @author gilvan
 */
@Local
public interface ProdutosFacadeLocal {

    void create(Produtos produtos);

    void edit(Produtos produtos);

    void remove(Produtos produtos);

    Produtos find(Object id);

    List<Produtos> findAll();

    List<Produtos> findRange(int[] range);

    int count();
    
}
