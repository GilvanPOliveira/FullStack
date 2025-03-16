/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cadastro.model;

import cadastrobd.model.PessoaFisica;
import cadastro.model.util.ConectorBD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author gilvan
 */
public class PessoaFisicaDAO {
    public PessoaFisica getPessoa(int id) {
        PessoaFisica pessoa = null;
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = ConectorBD.getConnection();
            stmt = conn.prepareStatement("SELECT * FROM pessoas JOIN pessoaFisica ON pessoas.idPessoa = pessoaFisica.idPessoa WHERE pessoas.idPessoa = ?");
            stmt.setInt(1, id);
            rs = stmt.executeQuery();

            if (rs.next()) {
                pessoa = new PessoaFisica(
                        rs.getInt("idPessoa"),
                        rs.getString("nome"),
                        rs.getString("logradouro"),
                        rs.getString("cidade"),
                        rs.getString("estado"),
                        rs.getString("telefone"),
                        rs.getString("email"),
                        rs.getString("cpf")
                );
            }
        } catch (SQLException e) {
        } finally {
            ConectorBD.close(rs);
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return pessoa;
    }

    public List<PessoaFisica> getPessoas() {
        List<PessoaFisica> pessoas = new ArrayList<>();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = ConectorBD.getConnection();
            stmt = conn.prepareStatement("SELECT * FROM pessoas JOIN pessoaFisica ON pessoas.idPessoa = pessoaFisica.idPessoa");
            rs = stmt.executeQuery();

            while (rs.next()) {
                PessoaFisica pessoa = new PessoaFisica(
                        rs.getInt("idPessoa"),
                        rs.getString("nome"),
                        rs.getString("logradouro"),
                        rs.getString("cidade"),
                        rs.getString("estado"),
                        rs.getString("telefone"),
                        rs.getString("email"),
                        rs.getString("cpf")
                );
                pessoas.add(pessoa);
            }
        } catch (SQLException e) {
        } finally {
            ConectorBD.close(rs);
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return pessoas;
    }

    public void incluir(PessoaFisica pessoa) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            stmt = conn.prepareStatement("INSERT INTO pessoas (nome, logradouro, cidade, estado, telefone, email) VALUES (?, ?, ?, ?, ?, ?)", PreparedStatement.RETURN_GENERATED_KEYS);
            stmt.setString(1, pessoa.getNome());
            stmt.setString(2, pessoa.getLogradouro());
            stmt.setString(3, pessoa.getCidade());
            stmt.setString(4, pessoa.getEstado());
            stmt.setString(5, pessoa.getTelefone());
            stmt.setString(6, pessoa.getEmail());
            stmt.executeUpdate();

            ResultSet rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                int idPessoa = rs.getInt(1);
                stmt = conn.prepareStatement("INSERT INTO pessoaFisica (idPessoa, cpf) VALUES (?, ?)");
                stmt.setInt(1, idPessoa);
                stmt.setString(2, pessoa.getCpf());
                stmt.executeUpdate();
                pessoa.setId(idPessoa);
            }
        } catch (SQLException e) {
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }
    }

    public void alterar(PessoaFisica pessoa) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            stmt = conn.prepareStatement("UPDATE pessoas SET nome=?, logradouro=?, cidade=?, estado=?, telefone=?, email=? WHERE idPessoa=?");
            stmt.setString(1, pessoa.getNome());
            stmt.setString(2, pessoa.getLogradouro());
            stmt.setString(3, pessoa.getCidade());
            stmt.setString(4, pessoa.getEstado());
            stmt.setString(5, pessoa.getTelefone());
            stmt.setString(6, pessoa.getEmail());
            stmt.setInt(7, pessoa.getId());
            stmt.executeUpdate();

            stmt = conn.prepareStatement("UPDATE pessoaFisica SET cpf=? WHERE idPessoa=?");
            stmt.setString(1, pessoa.getCpf());
            stmt.setInt(2, pessoa.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }
    }

    public void excluir(int id) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            stmt = conn.prepareStatement("DELETE FROM pessoaFisica WHERE idPessoa=?");
            stmt.setInt(1, id);
            stmt.executeUpdate();

            stmt = conn.prepareStatement("DELETE FROM pessoas WHERE idPessoa=?");
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }
    }
}
