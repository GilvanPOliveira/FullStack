"""
 
Número Primo

Na matemática, um Número Primo é aquele que pode ser dividido somente por 1 (um) e por ele mesmo.
Por exemplo, o número 7 é primo, pois pode ser dividido apenas pelo número 1 e pelo número 7.

-> Entrada

    A entrada contém vários casos de teste. A primeira linha da entrada contém um inteiro N (1 ≤ N ≤ 100),
    indicando o número de casos de teste da entrada. Cada uma das N linhas seguintes contém um valor inteiro
    X (1 < X ≤ 107), que pode ser ou não, um número primo.

-> Saída

    Para cada caso de teste de entrada, imprima a mensagem “X eh primo” ou “X não eh primo”, de acordo com a
    especificação fornecida.

-> Exemplo:

    | Exemplo de Entrada | Exemplo de Saída |
    |        3           | 8 nao eh primo   |
    |       51           | 51 nao eh primo  |
    |        7           | 7 eh primo       |

"""

# Valor a ser inserido na variável nprimo
nprimo = int(input())

# Uilizou-se a função range() para limitar o laço de repetição até número inserido (nprimo), para efetua os testes

for numero_primo in range(nprimo):
    n = nprimo
    primo = True
    for i in range(2, n):
        if n % i == 0:
            primo = False
    if primo:
        print('{} eh primo'.format(n))
    else:
        print('{} nao eh primo'.format(n))
    break
