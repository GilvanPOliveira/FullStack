"""

Notas e Moedas

Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor
monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor
pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis
são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

-> Entrada

    O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

-> Saída

    Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial,
    conforme exemplo fornecido.

    Obs: Utilize ponto (.) para separar a parte decimal.

-> Exemplo:

    | Exemplo de Entrada |    Exemplo de Saída   |
    | 576.73             | NOTAS:                |
    |                      5 nota(s) de R$ 100.00|
    |                      1 nota(s) de R$ 50.00 |
    |                      1 nota(s) de R$ 20.00 |
    |                      0 nota(s) de R$ 10.00 |
    |                      1 nota(s) de R$ 5.00  |
    |                      0 nota(s) de R$ 2.00  |
    |                      MOEDAS:               |
    |                      1 moeda(s) de R$ 1.00 |
    |                      1 moeda(s) de R$ 0.50 |
    |                      0 moeda(s) de R$ 0.25 |
    |                      2 moeda(s) de R$ 0.10 |
    |                      0 moeda(s) de R$ 0.05 |
    |                      3 moeda(s) de R$ 0.01 |
    
    | 4.00               | NOTAS:                |
    |                      0 nota(s) de R$ 100.00|
    |                      0 nota(s) de R$ 50.00 |
    |                      0 nota(s) de R$ 20.00 |
    |                      0 nota(s) de R$ 10.00 |
    |                      0 nota(s) de R$ 5.00  |
    |                      2 nota(s) de R$ 2.00  |
    |                      MOEDAS:               |
    |                      0 moeda(s) de R$ 1.00 |
    |                      0 moeda(s) de R$ 0.50 |
    |                      0 moeda(s) de R$ 0.25 |
    |                      0 moeda(s) de R$ 0.10 |
    |                      0 moeda(s) de R$ 0.05 |
    |                      0 moeda(s) de R$ 0.01 |
    
    | 91.01              | NOTAS:                |
    |                      0 nota(s) de R$ 100.00|
    |                      1 nota(s) de R$ 50.00 |
    |                      2 nota(s) de R$ 20.00 |
    |                      0 nota(s) de R$ 10.00 |
    |                      0 nota(s) de R$ 5.00  |
    |                      0 nota(s) de R$ 2.00  |
    |                      MOEDAS:               |
    |                      1 moeda(s) de R$ 1.00 |
    |                      0 moeda(s) de R$ 0.50 |
    |                      0 moeda(s) de R$ 0.25 |
    |                      0 moeda(s) de R$ 0.10 |
    |                      0 moeda(s) de R$ 0.05 |
    |                      1 moeda(s) de R$ 0.01 |

"""
valor = float(input())

#  NOTAS
notas100 = int(valor / 100)
valor = valor % 100
notas50 = int(valor / 50)
valor = valor % 50
notas20 = int(valor / 20)
valor = valor % 20
notas10 = int(valor / 10)
valor = valor % 10
notas5 = int(valor / 5)
valor = valor % 5
notas2 = int(valor / 2)
valor = valor % 2

# MOEDAS
moedas1 = int(valor / 1)
valor = valor % 1
moedas50 = int(valor / 0.50)
valor = valor % 0.50
moedas25 = int(valor / 0.25)
valor = valor % 0.25
moedas10 = int(valor / 0.10)
valor = valor % 0.10
moedas5 = int(valor / 0.05)
valor = valor % 0.05
moedas1cent = int(round(valor / 0.01))

print("NOTAS:")
print(f"{notas100} nota(s) de R$ 100.00")
print(f"{notas50} nota(s) de R$ 50.00")
print(f"{notas20} nota(s) de R$ 20.00")
print(f"{notas10} nota(s) de R$ 10.00")
print(f"{notas5} nota(s) de R$ 5.00")
print(f"{notas2} nota(s) de R$ 2.00")
print("MOEDAS:")
print(f"{moedas1} moeda(s) de R$ 1.00")
print(f"{moedas50} moeda(s) de R$ 0.50")
print(f"{moedas25} moeda(s) de R$ 0.25")
print(f"{moedas10} moeda(s) de R$ 0.10")
print(f"{moedas5} moeda(s) de R$ 0.05")
print(f"{moedas1cent} moeda(s) de R$ 0.01")
