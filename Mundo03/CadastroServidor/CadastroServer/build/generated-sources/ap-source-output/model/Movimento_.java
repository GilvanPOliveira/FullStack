package model;

import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.Pessoas;
import model.Produtos;
import model.Usuarios;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-05-14T14:38:37", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Movimento.class)
public class Movimento_ { 

    public static volatile SingularAttribute<Movimento, Integer> idMovimento;
    public static volatile SingularAttribute<Movimento, Pessoas> idPessoa;
    public static volatile SingularAttribute<Movimento, String> tipo;
    public static volatile SingularAttribute<Movimento, Produtos> idProduto;
    public static volatile SingularAttribute<Movimento, Usuarios> idUsuario;
    public static volatile SingularAttribute<Movimento, Integer> quantidade;
    public static volatile SingularAttribute<Movimento, Float> valorUnitario;

}