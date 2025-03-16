"""

Conversão Simples de Base

Neste problema você é solicitado a escrever um simples programa de conversão de base.
A entrada será um valor hexadecimal ou decimal. Você deverá converter cada valor da entrada.
Se o valor for hexadecimal, você deve convertê-lo para decimal e vice-versa. O valor hexadecimal
inicia sempre com “0x” ou também, é aquele valor cuja segunda casa contém a letra 'x'.

-> Entrada

    A entrada contém vários casos de teste. Cada linha de entrada, com exceção da última, contém
    um número não-negativo, decimal ou hexa. O valor decimal será menor ou igual a 231. A última linha
    contém um número negativo que não deve ser processado, indicando o encerramento do programa.

-> Saída

    Para cada linha de entrada (exceto a última) deve ser produzido uma linha de saída.
    Todo número hexadecimal deve ser precedido na saída por '0x' (zero xis).

-> Exemplo:

    | Exemplo de Entrada | Exemplo de Saída |
    |         4          |       0x4        |
    |         7          |       0x7        |
    |        44          |      0x2C        |
    |         0x80685    |    525957        |
    |        -1          |                  |

"""

while True:
    entrada = input()
    if entrada == "-1":
        break
    if entrada.isdigit():
        entrada = hex(int(entrada))
        entrada = entrada[:2] + entrada[2:].upper()
    else:
        entrada = int(entrada, 16)
    print(entrada)

"""
O if com a variável = -1 é para não gerar um loop sem rumo, negativo, infinito (por isso o break)

O metodo .isdigit() é para saber se a variável contem apenas dígitos(números)

    A função hex() converte o número inteiro para hexadecimal, onde a saída é uma 'String'

    Na proxima etapa, os dois primeiros caracteres serão '0x' e o restante da 'String' (as letras)
    serão convertidos para letras maiúsculas através do método .upper()

Caso não tenha sido inserido um número
    assume-se que é uma 'String' hexadecimal e converte para um número decimal, ou seja,
    utilizando a base 16
    por exemplo:
        entrada = 1A
        a função int converterá para o valor decimal = 26
            o cálculo seria: 1 * 16^1 + 10 * 16^0 = 16 + 10 = 26
"""