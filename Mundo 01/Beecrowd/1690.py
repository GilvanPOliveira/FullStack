"""

Soma de Sobconjuntos

Você tem em mãos um array de números inteiros positivos, não necessariamente distintos.

Vamos escolher alguns dos números no array, isto é, um subconjunto não vazio do array original.
O valor de um subconjunto é a soma dos elementos contidos nele.

Qual é o menor valor de um subconjunto que não pode ser gerado?

Por exemplo, pegue o array [2, 1, 5]. Os seguintes subconjuntos pode ser
formados: [1], [2], [5], [1, 2], [1, 5], [2, 5], [1, 2, 5]. Os seus valores são os
seguintes: 1, 2, 5, 3, 6, 7, 8, respectivamente. O valor menor do subconjunto que não pode ser
gerado, neste caso, é 4.

-> Entrada

    A primeira linha contém um número T (1 ≤ T ≤ 1000), indicando que se seguirão T casos de teste.
    Para cada teste, a primeira linha conterá um número N (1 ≤ N ≤ 10000), indicando a quantidade
    de números que existem no array. A linha seguinte conterá N inteiros positivos
    separados por espaços, entre 1 a 109.

-> Saída

    Para cada caso de teste, imprima uma única linha, a resposta para o problema.

->Exemplo:

    | Exemplo de Entrada |   Exemplo de Saída  |
    | T = 3              | 2                   |
    | N = 1              | (foi utilizado como |
    | N = [1]            | T do exempo abaixo) |
    | T =                | 1                   |
    | N = 1              | (foi utilizado como |
    | N = [2]            | T do exempo abaixo) |
    | T =                | 4                   |
    | N = 3              |                     |
    | N = [2, 1, 5]      |                     |

"""

t = int(input())

for _ in range(t):
    i = int(input())
    lista = list(map(int, input().split()))
    if 1 not in lista:
        print(1)
    else:
        n = 1
        for numeros in sorted(lista):
            if numeros <= n:
                n += numeros
            else:
                break
        print(n)

"""
O loop for com o _ significa que o valor da variável não será utilizado dentro do loop
e a função range() determina que o loop seja executado a quantidade de vezes que a variável possua
    exemplo:
        a variavel t = 4
            o loop será executado 4 vezes apenas
            
A função list() cria um vetor para receber os parâmetros

A função map() recebe como parâmetro uma função de callback, onde para cada item ela retorna
o valor do item equivalente

O método .split() serve para dividir/separar com espaços
    exemplo:
        012345 => 0 1 2 3 4 5

A condição inicial é que o menor valor positivo que pode ser formado com os números da lista é 1
"A linha seguinte conterá N inteiros positivos separados por espaços, entre 1 a 109."

Caso a condição da questão seja atendida n será igual a 1 (n=1) e dará inicio a um loop
que retornará a lista em ordem crescente, através da função sorted()

Se o número atual fo menor ou igual a n, o valor de n é incrementado pelo número atual
como pede a questão

*Porém o exercício utiliza o valor do resultado anterior para executar o teste seguinte
**Caso queira fazer apenas um teste por vez, deve-se inserir um break no final do código
  após o print(n)
"""