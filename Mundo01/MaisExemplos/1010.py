# 1010 - Cálculo Simples

"""
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário 
de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça
2. Após, calcule e mostre o valor a ser pago.

## Entrada

O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
respectivamente dois inteiros e um valor com 2 casas decimais.

## Saída

A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar 
um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 
casas após o ponto.

| Exemplos de Entrada |    Exemplos de Saída    |
|         ---         |         ---             |
|      12 1 5.30      |                         | 
|      16 2 5.10      | VALOR A PAGAR: R$ 15.50 |
|      13 2 15.30     |                         |    
|      161 4 5.20     | VALOR A PAGAR: R$ 51.40 |
|      1 1 15.10      |                         | 
|      2 1 15.10      | VALOR A PAGAR: R$ 30.20 |
|         ---         |           ---           |

""""

codPeca1, qtdPeca1, valPeca1 = map(float, input().split())
codPeca2, qtdPeca2, valPeca2 = map(float, input().split())

total1 = qtdPeca1 * valPeca1
total2 = qtdPeca2 * valPeca2

valorTotal = total1 + total2

print('VALOR A PAGAR: R$ {:.2f}'.format(valorTotal))
