package model;

import javax.annotation.processing.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.Movimento;
import model.PessoaFisica;
import model.PessoaJuridica;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2024-05-14T14:38:37", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Pessoas.class)
public class Pessoas_ { 

    public static volatile SingularAttribute<Pessoas, PessoaFisica> pessoaFisica;
    public static volatile SingularAttribute<Pessoas, Integer> idPessoa;
    public static volatile SingularAttribute<Pessoas, String> cidade;
    public static volatile SingularAttribute<Pessoas, String> estado;
    public static volatile SingularAttribute<Pessoas, String> telefone;
    public static volatile SingularAttribute<Pessoas, PessoaJuridica> pessoaJuridica;
    public static volatile SingularAttribute<Pessoas, String> logradouro;
    public static volatile SingularAttribute<Pessoas, String> nome;
    public static volatile CollectionAttribute<Pessoas, Movimento> movimentoCollection;
    public static volatile SingularAttribute<Pessoas, String> email;

}