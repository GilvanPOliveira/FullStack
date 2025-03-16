"""

A Biblioteca do Senhor Severino

Em uma pacata cidade do interior, o senhor Severino decidiu montar a própria biblioteca,
já que coleciona vários livros desde sua juventude. Como ele não sabe programar, pediu ajuda
ao neto para criar um programa que cadastre e ordene seus livros pelo código. Porém, seu neto
ainda está no ensino fundamental, e como sabe muito pouco de programação, acabou criando um
programa que somente cadastra os livros, mas não os ordena.

Desse modo, o senhor Severino recorreu a você, pois sabe de suas habilidades com programação.
Sua tarefa é simples: ordenar os cadastros dos códigos dos livros.

-> Entrada

    A entrada contém vários casos de teste. Cada teste começa com um valor N (1 ≤ N ≤ 1000).
    Em seguida, N linhas terão os códigos dos livros, que estão sempre no formato "xxxx",
    isto é, não haverá o cadastro '1', por exemplo, mas "0001". A entrada termina com fim de arquivo.

-> Saída

    Seu programa deverá imprimir o cadastro dos códigos ordenado. Não haverá linha em branco
    entre os casos de teste.

-> Exemplo:

    | Exemplo de Entrada | Exemplo de Saída |
    | 3                  | 0015             |
    | 1233               | 0100             |
    | 0015               | 1233             |
    | 0100               |                  |

    | 7                  | 0000             |
    | 0752               | 0001             |
    | 1110               | 0752             |
    | 0001               | 1110             |
    | 6322               | 6321             |
    | 8000               | 6322             |
    | 6321               | 8000             |
    | 0000               |                  |

"""

while True:  # Apenas para ler a entrada, que contém vários casos de teste
    try:
        n = int(input())
    except EOFError:  # Se não houver mais entradas, o loop será interrompido
        break

    livros = []  # Lista vazia para armazenar os códigos dos livros
    for i in range(n):
        livros.append(input().zfill(4))  # Adicionando os livros a lista
        # O método .zfill(4) garante que cada código adicionado possua exatamente 4 caracteres
        # preenchendo com zeros á esquerda, se necessário
    livros.sort()  # Ordena a lista (Crescente)

    for codigo in livros:
        print(codigo)  #Loop para imprimir os códigos linha por linha
   
"""
    Caso não queira usar o .zfill(), basta apenas utilizar:
        
        codigo = int(input())
        livros.append("{:04d}".format(codigo))
        
        Essa alteração formata o número com 4 dígitos, 
        preenchendo com zeros à esquerda caso necessário, 
        usando o formato {:04d}.
        Como mostrado abaixo:

while True:  # Apenas para ler a entrada, que contém vários casos de teste
    try:
        n = int(input())
    except EOFError:  # Se não houver mais entradas, o loop será interrompido
        break

    livros = []  # Lista vazia para armazenar os códigos dos livros
    for i in range(n):
        codigo = int(input())
        livros.append("{:04d}".format(codigo))
""""""
		formata o número com 4 dígitos, 
        preenchendo com zeros à esquerda caso necessário, 
        usando o formato {:04d}.
""""""
    livros.sort()  # Ordena a lista (Crescente)

    for codigo in livros:
        print(codigo)  #Loop para imprimir os códigos linha por linha   
"""


"""
Código sem comentários:

while True:
    try:
        n = int(input())
    except EOFError:
        break
    
    livros = []
    for i in range(n):
        livros.append(input().zfill(4))
        
    livros.sort()
    
    for codigo in livros:
        print(codigo)
"""
