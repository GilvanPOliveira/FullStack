"""

Camisetas

O professor Rolien organizou junto às suas turmas de Ciência da Computação a confecção
de uma camiseta polo que fosse ao mesmo tempo bonita e barata. Após algumas conversas,
ficou decidido com os alunos que seriam feitas somente camisetas da cor preta, o que
facilitaria a confecção. Os alunos poderiam escolher entre o logo do curso e os detalhes
em branco ou vermelho. Assim sendo, Rolien precisa de sua ajuda para organizar as listas
de quem quer a camiseta em cada uma das turmas, relacionando estas camisetas pela cor do
logo do curso, tamanho (P, M ou G) e por último pelo nome.

-> Entrada

    A entrada contém vários casos de teste. Cada caso de teste inicia com um valor N,
    (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de camisetas a serem feitas
    para aquela turma. As próximas N*2 linhas contém informações de cada uma das
    camisetas (serão duas linhas de informação para cada camiseta). A primeira linha irá
    conter o nome do estudante e a segunda linha irá conter a cor do logo da camiseta
    ("branco" ou "vermelho") seguido por um espaço e pelo tamanho da camiseta "P" "M" ou "G".
    A entrada termina quando o valor de N for igual a zero (0) e esta valor não
    deverá ser processado.

-> Saída

    Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor dos
    detalhes em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último
    por ordem ascendente de nome, conforme o exemplo abaixo.

    *Obs.: Deverá ser impressa uma linha em branco entre dois casos de teste.

-> Exemplo:

    |  Exemplo de Entrada  |        Exemplo de Saída        |
    | 9                    | branco P Cezar Torres Mo       |
    | Maria Jose           | branco P Maria Jose            |
    | branco P             | branco M JuJu Mentina          |
    | Mangojata Mancuda    | branco G Adabi Finho           |
    | vermelho P           | branco G Severina Rigudinha    |
    | Cezar Torres Mo      | vermelho P Amaro Dinha         |
    | branco P             | vermelho P Baka Lhau           |
    | Baka Lhau            | vermelho P Carlos Chade Losna  |
    | vermelho P           | vermelho P Mangojata Mancuda   |
    | JuJu Mentina         |                                |
    | branco M             | branco P Maria Joao            |
    | Amaro Dinha          | branco P Maria Jose            |
    | vermelho P           | vermelho P Marcio Guess        |
    | Adabi Finho          |
    | branco G             |
    | Severina Rigudinha   |
    | branco G             |
    | Carlos Chade Losna   |
    | vermelho P           |
    | 3                    |
    | Maria Joao           |
    | branco P             |
    | Marcio Guess         |
    | vermelho P           |
    | Maria Jose           |
    | branco P             |
    | 0                    |

"""

aux = False  # Variável responsável para imprimir linha em branco entre dois testes
while True:
    n = int(input())
    if n == 0:
        break
    # Criando as listas para cada cor e tamanho
    camisaBranca = {"P": [], "M": [], "G": []}
    camisaVermelha = {"P": [], "M": [], "G": []}
    # Lendo as informações de cada camiseta
    for i in range(n):
        nome = input()
        cor, tamanho = input().split()
        # Adicionando a camiseta na lista correspondente
        if cor == "branco":
            camisaBranca[tamanho].append(nome)
        else:
            camisaVermelha[tamanho].append(nome)
        # Ordenando as listas
    for camisetas in [camisaBranca, camisaVermelha]:
        for tamanho in ["G", "M", "P"]:
            camisetas[tamanho].sort()
    if aux: print()  # Criando a linha em branco entre os testes
    # Imprimindo as listas
    for cor in ["branco", "vermelho"]:
        camisetas = camisaBranca if cor == "branco" else camisaVermelha
        for tamanho in ["P", "M", "G"]:
            for nome in camisetas[tamanho]:
                print(f"{cor} {tamanho} {nome}")
    aux = True  # Imprimindo a linha em branco entre os casos de teste

"""
# Outra Forma de Fazer


quebraLinha = False
while True:
    n = int(input())
    if n == 0:
        break
    
    camisetas_branco = {"P": [], "M": [], "G": []}
    camisetas_vermelho = {"P": [], "M": [], "G": []}

    for i in range(n):
        nome = input()
        cor, tamanho = input().split()

        if cor == "branco":
            camisetas_branco[tamanho].append(nome)
        else:
            camisetas_vermelho[tamanho].append(nome)

    for camisetas in [camisetas_branco, camisetas_vermelho]:
        for tamanho in ["G", "M", "P"]:
            camisetas[tamanho].sort()
            
    if quebraLinha: print()

    for cor in ["branco", "vermelho"]:
        for tamanho in ["P", "M", "G"]:
            camisetas = camisetas_branco if cor == "branco" else camisetas_vermelho
            for nome in camisetas[tamanho]:
                print(f"{cor} {tamanho} {nome}")
    quebraLinha = True
    
"""
