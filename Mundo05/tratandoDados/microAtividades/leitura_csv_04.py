import pandas as pd

dadosInformados = './dados.csv'

dados = pd.read_csv(dadosInformados, sep=';', engine='python', encoding='utf-8')

print("Primeiras 10 linhas do DataFrame:")
print(dados.head(10))

print("\nUltimas 10 linhas do DataFrame:")
print(dados.tail(10))



