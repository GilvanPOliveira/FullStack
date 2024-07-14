# BubbleSort

def bubble_sort(lista):
    n = len(lista)
    # Percorre toda a lista
    for i in range(n):
        # Últimos i elementos já estão ordenados
        for j in range(n - i - 1):
            # Compara elementos adjacentes
            if lista[j] > lista[j + 1]:
                # Troca elementos
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
    return lista

"""
A função Bubble Sort
recebe uma lista como argumento e retorna a lista ordenada

Essa implementação é ineficiente para listas grandes
E pode ter uma complexidade de tempo O(n^2)
"""
