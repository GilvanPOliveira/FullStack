import pandas as pd
import numpy as np

# 04
dados = pd.read_csv('dados.csv', sep=';', engine='python', encoding='utf-8')

# 05
print("Informacoes Gerais do Dataset:")
dados.info()
print("\nPrimeiras Linhas:")
print(dados.head())
print("\nUltimas Linhas:")
print(dados.tail())

# 06
dados_copia = dados.copy()

# 07
dados_copia['Calories'] = dados_copia['Calories'].fillna(0)
print("\nApos substituir nulos em 'Calories' por 0:")
print(dados_copia)

# 08
dados_copia['Date'] = dados_copia['Date'].fillna('1900/01/01')
print("\nApos substituir nulos em 'Date' por '1900/01/01':")
print(dados_copia)
dados_copia['Date'] = (
    dados_copia['Date']
    .astype(str)
    .str.strip("'")
    .str.strip('"')
)
dados_copia['Date'] = dados_copia['Date'].replace('20201226', '2020/12/26')
try:
    dados_copia['Date'] = pd.to_datetime(
        dados_copia['Date'],
        format='%Y/%m/%d'
    )
except Exception as e:
    print("\nErro na conversao de 'Date':", e)

# 09
dados_copia['Date'] = dados_copia['Date'].replace('1900/01/01', np.nan)
dados_copia['Date'] = pd.to_datetime(
    dados_copia['Date'],
    format='%Y/%m/%d',
    errors='coerce'
)
print("\nApos substituir '1900/01/01' por NaN e converter 'Date':")
print(dados_copia)

# 10
dados_copia = dados_copia.dropna(subset=['Date'])

# 11
dados_copia['Date'] = pd.to_datetime(
    dados_copia['Date'], format='%Y/%m/%d', errors='coerce')
print("\nApos correcao do valor '20201226' e conversao final de 'Date':")
print(dados_copia)

# 12
dados_copia = dados_copia.dropna(subset=['Date'])
print("\nDataset final apos remocao de registros com 'Date' nulo:")
print(dados_copia)
