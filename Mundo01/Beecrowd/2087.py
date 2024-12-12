"""

Conjuntos Bons e Ruins

Nesse problema você deverá descobrir se um conjunto de diversas palavras é bom ou ruim.
Por definição, um conjunto é bom quando nenhuma palavra desse conjunto é um prefixo de
uma outra palavra. Caso contrário, este é considerado um conjunto ruim.

Por exemplo, {abc, dae, abcde} é um conjunto ruim, pois abc é um prefixo de abcde.
Quando duas palavras são iguais, definimos como uma sendo prefixo da outra.

-> Entrada

    A entrada contém vários casos de teste. A primeira linha de cada caso de teste terá
    um inteiro N (1 ≤ N ≤ 10⁵), representando a quantidade de palavras no conjunto. Segue
    então N linhas, cada uma tendo uma palavra de no máximo 100 letras minúsculas. A entrada
    termina quando N = 0 e não deve ser processada.

-> Saída

    Para cada caso de teste, você deverá imprimir Conjunto Bom, ou Conjunto Ruim, conforme
    explicado acima.

-> Exemplo:

    | Exemplo de Entrada | Exemplo de Saída |
    | 3                                     |
    | abc                                   |
    | dae                                   |
    | abcde              |   Conjunto Ruim  |
    | 2                                     |
    | abc                                   |
    | def                |   Conjunto Bom   |
    | 0                  |      encerra     |

"""

while True:

    n = int(input())  # Quantidade de conjuntos

    if n == 0:  # Condição para encerrar
        break

    lista = []  # Lista vazia para receber as strings

    for conjunto in range(n):  # Loop para adicionar as strings a lista
        lista.append(input())

    lista.sort()  # Ordenar a lista (Crescente)

    conjunto_ruim = False  # Denominou-se a variavél como falsa apenas para poder comparar abaixo

    for i in range(n - 1):  #Loop para comparar todos os itens da lista
        if lista[i + 1].startswith(lista[i]):
            conjunto_ruim = True
            break

    if conjunto_ruim:
        print('Conjunto Ruim')
    else:
        print('Conjunto Bom')

"""
Utilizou-se o método startswith() pois ele verifica a string começa com um determinado prefixo
Ele retorna o valor True (verdadeiro) se a string começar com o prefixo especificado e False (falso)
caso contrário
Ou seja, se o método identificar a repetição do conjunto, ele julga falso, e retorna Conjunto Ruim
"""
