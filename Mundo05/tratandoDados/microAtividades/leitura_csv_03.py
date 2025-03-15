import pandas as pd

dadosInformados = './dados.csv'

dados = pd.read_csv(dadosInformados, sep=';', engine='python', encoding='utf-8')

pd.set_option('display.max_rows', 9999)

print(dados.to_string())
