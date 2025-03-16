"""
Substituição de Tag

Você está no comando de um sistema de documentos que utiliza tags de código numérico para
renderizar documentos para impressão. Há um lote de documentos com o texto baseado em tags,
que você deve analisar e converter para tags numéricas para a entrada no sistema. Uma tag é
iniciada por um caracter '<', que pode ser seguida por letras, números, barras ou espaços, e
para finalizar a tag um caracter '>'. As tags não podem ser encaixadas umas nas outras.

As seguintes tags não são válidas:

">HI", "<a<b>c>", "<a b c><", "<a<b>".

As seguintes tags são válidas:

"/=<>HI", "/<>H=I<>/", "<><><><>", "<a=/><b==//bb><c223>", "<a b c>".

Para as comparações entre caracteres deve ser desconsiderado o case sensitive.

-> Entrada

    A entrada contém vários casos de teste. Cada caso de teste é composto de três linhas.
    A primeira linha contém a tag original presente no texto do documento, que irá conter
    apenas letras (a-z, A-Z), e seu tamanho será entre 1 e 10 caracteres inclusive. A
    segunda linha contém um valor numérico pela qual a tag original deverá ser substituida,
    que será um número entre 1 e 1000 inclusive. A terceira e última linha terá entre 1 e 50
    caracteres inclusive, e poderá conter os letras (a-z, A-Z), números (0-9), sinal de menor
    (<), sinal de maior (>), sinais de igual (=), barras (/), ou espaços em branco. Todos os
    '<' e '>' são usados apenas em tags.

-> Saída

    Converto o texto do documento que é dado na entrada, utilizando as específicações dadas
    acima e imprima em uma única linha, o novo texto do documento com as novas tags, para maiores
    esclarecimentos consulte o exemplo abaixo.

-> Exemplo:

    |          Exemplo de Entrada          |        Exemplo de Saída       |
    | BODY                                                                 |
    | 10                                                                   |
    | <><BODY garbage>body</BODY>          | <><10 garbage>body</10>       |

    | aBc                                                                  |
    | 923                                                                  |
    | <dont                                | <dont                         |

    | replacethis>abcabc<abcabcde>         | replacethis>abcabc<abcabcde>  |

    | table                                                                |
    | 1                                                                    |
    | <ta>bLe<TaBlewidth=100></table></ta> | <ta>bLe<1width=100></1></ta>  |

    | replace                                                              |
    | 323                                                                  |
    | nothing inside                       | nothing inside                |

    | HI                                                                   |
    | 667                                                                  |
    | 92<HI=/><z==//HIb><cHIhi>            | 92<667=/><z==//667b><c667667> |

    | a                                                                    |
    | 23                                                                   |
    | <a B c a>                            | <23 B c 23>                   |

    | b                                                                    |
    | 2                                                                    |
    | <b b abc ab c> Mangojata             | <2 2 a2c a2 c> Mangojata      |

"""

while True:
    try:  # Tratamento de exceção
        linha1 = input().lower()  # Converte texto para minúsculo
        linha2 = input()
        linha3 = input()
        """
        Subistitui todas as ocorrências do caractere '<' por '.<' e todas 
        as ocorrências do caractere '>' por '>.', e depois divide o texto
        em uma lista de palavras usando o '.' como separador
        """
        palavras = linha3.replace('<', '.<').replace('>', '>.').split('.')
        textoNovo = ""  #  String vazia para guardar o texto modificado
        textoFinal = ""  # String vazia para guardar o texto final

        for p in palavras:
            pNovo = p  # Atribui a palavra atual a uma nova variável
            if pNovo != '':  # Verifica se a palavra não está vazia
                if pNovo[0] == '<':  # Verifica se a palavra começa com o caractere '<'
                    textoNovo += pNovo.lower().replace(linha1, linha2)
                    # Deixa as palavras minúsculas, substitui as palavras pela
                    # palavra nova (pNovo) caso seja necessário
                    # e adiciona a palavra modificada no texto novo (textoNovo)
                else:
                    textoNovo += pNovo
                    # Caso contrário, adiciona as palavras originais ao texto novo (textoNovo)

        p1 = linha3.split(' ')  # Divide a linha3 em uma lista usando espaço como separador
        p2 = textoNovo.split(' ')  # Divide o texto modificado (textoNovo) usando espaço como separador
        """
        A função len() foi utilizada para determinar o número de elementos que contém p2 
        e a função range() foi usada para percorrer todos os índices válidos da lista
        """
        for i in range(len(p2)):
            if p1[i].lower() == p2[i]:  # Verifica se a linha3 (p1) é igual a palavra modificada (textoNovo)
                textoFinal += p1[i] + ' '  # Adiciona a linha3 (p1) ao textoFinal
            else:
                textoFinal += p2[i] + ' '  # Adiciona o texto modificado (p2) ao textoFinal

        print(textoFinal[0:len(textoFinal) - 1])  # Imprime o textoFinal sem o último espaço em branco

    except EOFError:  # Captura de exceção, que ocorre quando não há mais entrada do usuário
        break

"""
Código sem comentário: 

while True:
    try: 
        linha1 = input().lower()  
        linha2 = input()
        linha3 = input()
    
        palavras = linha3.replace('<', '.<').replace('>', '>.').split('.')
        textoNovo = ""  
        textoFinal = ""  

        for p in palavras:
            pNovo = p  
            if pNovo != '':  
                if pNovo[0] == '<':  
                    textoNovo += pNovo.lower().replace(linha1, linha2)
                else:
                    textoNovo += pNovo

        p1 = linha3.split(' ')  
        p2 = textoNovo.split(' ')  

        for i in range(len(p2)):
            if p1[i].lower() == p2[i]:  
                textoFinal += p1[i] + ' '  
            else:
                textoFinal += p2[i] + ' '  

        print(textoFinal[0:len(textoFinal) - 1])  

    except EOFError:  
        break
"""