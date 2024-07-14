package model;

import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.Movimento;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-05-14T14:38:37", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Usuarios.class)
public class Usuarios_ { 

    public static volatile SingularAttribute<Usuarios, String> senha;
    public static volatile SingularAttribute<Usuarios, Integer> idUsuario;
    public static volatile SingularAttribute<Usuarios, String> nome;
    public static volatile CollectionAttribute<Usuarios, Movimento> movimentoCollection;

}