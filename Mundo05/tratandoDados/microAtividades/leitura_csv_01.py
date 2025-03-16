import pandas as pd

dadosInformados = './dados.csv'

dados = pd.read_csv(dadosInformados, sep=';', engine='python', encoding='utf-8')

print(dados)










