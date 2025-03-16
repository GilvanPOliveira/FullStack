"""

Conversão de Tempo

Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento
em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
 
-> Entrada

    O arquivo de entrada contém um valor inteiro N.

-> Saída

    Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos,
    conforme exemplo fornecido.
    
-> Exemplo:

    | Exemplo de Entrada | Exemplo de Saída |
    |        556         |     00:09:16     |
    |          1         |     00:00:01     |
    |     140153         |     38:55:53     |

"""

tempo = int(input())

horas = tempo // 3600
tempo = tempo % 3600

minutos = tempo // 60
segundos = tempo % 60

print("{}:{}:{}".format(horas, minutos, segundos))

"""
Outro formato para exibir o resultado:

print(f"{horas}:{minutos}:{segundos}")
"""

"""
Outro formato para exibir o resultado, porém neste caso usa-se apenas um operador, para divisão,
(/) no lugar de dois (//), ou para qualquer operador "duplo":

print("%i:%i:%i"%(horas,minutos,segundos))
"""
