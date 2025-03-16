# 3048 - Sequência Secreta

"""
Na calçada em frente ao Palácio Imperial, não se sabe a razão, existe uma sequência de **N** números desenhados no chão. **A** sequência tem a seguinte forma: ela começa e termina com o número **1**; apenas os números **1** e **2** aparecem nela; e o número **2** aparece pelo menos uma vez. Veja um exemplo na coluna **(a)** da figura ao lado. Ninguém sabe o significado da sequência e, justamente por isso, várias teorias malucas surgiram. Uma delas diz que a sequência representa, na verdade, apenas um valor que estaria relacionado a um segredo dos imperadores. Esse valor é a quantidade máxima de números da sequência que poderiam ser marcados com um círculo, de modo que a sequência de números marcados não contenha dois números iguais consecutivos. A coluna **(b)** da figura ao lado ilustra uma sequência de **4** números marcados que obedece a restrição acima. Só que é possível marcar **7** números, como mostra a coluna **(c)** da figura.

Neste problema, dada a sequência original de números desenhados no chão da calçada, seu programa deve computar e imprimir a quantidade máxima de números da sequência que poderiam ser marcados com um círculo sem que haja dois números iguais consecutivos na sequência marcada.

 1   1  (1)
 2  (2) (2)
 1   1   1
 2   2   2
 2   2  (2)
 2   2   2
 1  (1)  1
 1   1  (1)
 2  (2)  2
 2   2  (2)
 1  (1)  1
 1   1  (1)
(a) (b) (c)

## **Entrada**

A primeira linha da entrada contém um inteiro **N** representando o tamanho da sequência. As **N** linhas seguintes contêm, cada uma, um inteiro **Vi** , **para 1 ≤ i ≤ N**, definindo a sequência de números desenhados no chão da calçada imperial.

## **Saída**

Seu programa deve imprimir uma linha contendo um número inteiro representando a quantidade máxima de números da sequência que poderiam ser marcados com um círculo sem que haja dois números iguais consecutivos na sequência marcada.

**Restrições**

- **3 ≤ N ≤ 500**
- **Vi é igual a 1 ou 2, para 1 ≤ i ≤ N**

| Exemplo de Entrada | Exemplo de Saída |
|         ---        |        ---       |
|          5         |                  |
|          1         |                  |
|          1         |                  |
|          1         |                  |
|          2         |                  |
|          1         |         3        |
|         12         |                  |
|          1         |                  |
|          2         |                  |
|          1         |                  |
|          2         |                  |
|          2         |                  |
|          2         |                  |
|          1         |                  |
|          1         |                  |
|          2         |                  |
|          2         |                  |
|          1         |                  |
|          1         |         7        |
|          3         |                  |
|          1         |                  |
|          2         |                  |
|          1         |         3        |
|         ---        |        ---       |

"""

# O mais difícil ate agora (Edit: codigo aceito, continha erro)

n = int(input())
sequencia = []

for _ in range(n):
    sequencia.append(int(input()))

v = sequencia[0]
i = 1
consecutivos = 0

while i < n:
    if v == 1:
        for g in range(i, n):
            if sequencia[g] == 2:
                break
        else:
            g = n
        i = g
        v = 2
    else:
        for g in range(i, n):
            if sequencia[g] == 1:
                break
        else:
            g = n
        i = g
        v = 1
    consecutivos += 1

print(consecutivos)


#  Aceito pelo BeeCrowd

n = int(input())
sequencia = []

for _ in range(n):
    sequencia.append(int(input()))

v = sequencia[0]
i = 1
consecutivos = 1

while i < n:
    if v == 1:
        while i < n and sequencia[i] != 2:
            i += 1
        v = 2
    else:
        while i < n and sequencia[i] != 1:
            i += 1
        v = 1
    
    if i < n:
        consecutivos += 1
        i += 1

print(consecutivos)
