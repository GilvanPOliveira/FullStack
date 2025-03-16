# 2344 - Notas da Prova

"""
Rosy é uma talentosa professora do Ensino Médio que já ganhou muitos prêmios pela 
qualidade de sua aula. Seu reconhecimento foi tamanho que foi convidada a dar aulas 
em uma escola da Inglaterra. Mesmo falando bem inglês, Rosy ficou um pouco apreensiva 
com a responsabilidade, mas resolveu aceitar a proposta e encará-la como um bom desafio.

Tudo ocorreu bem para Rosy até o dia da prova. Acostumada a dar notas de 0 (zero) a 
100 (cem), ela fez o mesmo na primeira prova dos alunos da Inglaterra. No entanto, os 
alunos acharam estranho, pois na Inglaterra o sistema de notas é diferente: as notas 
devem ser dadas como conceitos de A a E. O conceito A é o mais alto, enquanto o conceito 
E é o mais baixo.

Conversando com outros professores, ela recebeu a sugestão de utilizar a seguinte tabela, 
relacionando as notas numéricas com as notas de conceitos:

|   Nota   | Conceito |
|    0     |     E    |
| 1 a 35   |     D    |
| 36 a 60  |     C    |
| 61 a 85  |     B    |
| 86 a 100 |     A    |

O problema é que Rosy já deu as notas no sistema numérico, e terá que converter as notas 
para o sistema de letras. Porém, Rosy precisa preparar as próximas aulas (para manter a 
qualidade que a tornou reconhecida), e não tem tempo suficiente para fazer a conversão
das notas manualmente.

Você deve escrever um programa que recebe uma nota no sistema numérico e determina o 
conceito correspondente.

## **Entrada**

A entrada contém um único conjunto de testes, que deve ser lido do dispositivo de entrada 
padrão (normalmente o teclado). A entrada contém uma única linha com um número inteiro 
**N** (0 ≤ **N** ≤ 100), representando uma nota de prova no sistema numérico.

## **Saída**

Seu programa deve imprimir, na saída padrão, uma letra (A, B, C, D, ou E em maiúsculas) 
representando o conceito correspondente à nota dada na entrada.

| Exemplos de Entrada | Exemplos de Saída |
|         ---         |         ---       |
|         12          |          D        |
|         87          |          A        |
|          0          |          E        |
|         ---         |         ---       |

"""

nota = int(input())

conceito = [('E',0,0), ('D',1,35), ('C',36,60), ('B',61,85), ('A',86,100)]
#  Onde o primeiro é o valor que será impresso
#  E os números são os parâmetros de comparação (EX: 1,35 => de 1 até 35)

n = ''
for i in conceito:
    if i[1] <= nota < i[2]:
        n = i[0]
        break
print(f'{n}')
