import pandas as pd

dadosInformados = './dados.csv'

dados = pd.read_csv(dadosInformados, sep=';', engine='python', encoding='utf-8')

print("Informacoes gerais sobre o conjunto de dados:")
dados.info()

total_linhas, total_colunas = dados.shape
print(f"\nTotal de linhas: {total_linhas}")
print(f"Total de colunas: {total_colunas}")

print("\nQuantidade de dados nulos por coluna:")
print(dados.isnull().sum())

print("\nTipo de dado de cada coluna:")
print(dados.dtypes)

print("\nMemoria utilizada pelo conjunto de dados:")
print(dados.memory_usage(deep=True))











