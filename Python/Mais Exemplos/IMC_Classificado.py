# IMC com Classificação

peso = float(input('Insira seu peso em kg: '))
altura = float(input('Insira sua altura em metros: '))

imc = peso / altura ** 2
 
classificacoes = [
		  ('Magreza Grave',0,16),
		  ('Magreza Moderada',16,17),
		  ('Magreza Leve',17,18.5),
		  ('Saudável',18.5,25),
		  ('Sobrepeso',25,30),
		  ('Obesidade Grau I',30,35),
		  ('Obesidade Grau II',35,40),
		  ('Obesidade Grau III',40,float('inf')),
		 ]

classificacao = ''

for i in classificacoes:
    if i[1] <= imc < i[2]:
        classificacao = i[0]
        break

print(f'Seu IMC é {imc:.4f}, você está com {classificacao}')
