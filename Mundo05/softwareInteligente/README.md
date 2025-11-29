# Mundo 05 - Nível 04 - RPG0033 – DANDO INTELIGÊNCIA AO SOFTWARE 

Através desta atividade o aluno realizará o processo (PLN) de Análise de Sentimento a partir de textos obtidos de tweets (mensagens publicadas na rede social Twitter/X).

## Contextualização

Recentemente a empresa em que você trabalha, como Analista de Data Science, foi contratada por uma grande empresa interessada em abrir, no Brasil, centros de treinamento esportivos vinculados a grandes clubes de futebol da Inglaterra. Nesse contexto, a empresa contratante deseja saber a percepção das pessoas em relação aos clubes citados, i.e., de uma forma geral, qual o sentimento delas, expressos através de textos publicados em redes sociais, sobre os mesmos.Para essa atividade você deverá aplicar a Analise de Sentimentos, tarefa de Processamento de Linguagem Natural com uso de Machine Learning. Todo o passo-a-passo necessário para a atividade é descrito a seguir.

## Procedimentos

1. Estando logado no Google Colab, clique no menu “Arquivo” e selecione a opção “Novo notebook”;
2. Na nova aba aberta no navegador, dê um nome ao seu notebook, clicando e alterando o nome automaticamente gerado – Untitled0.ipynb – para sentiment.ipynb;
3. Na janela de código, clique na opção “+Texto” (destacada no print abaixo) para inserir um bloco de texto;
4. No bloco de texto, insira um texto que explique o que será executado, a seguir, no bloco de código a ser inserido. Segue uma sugestão, que pode ser complementada posteriormente por você: 

```python
“Análise de Sentimentos.”
```

5. Insira um novo bloco de texto com o conteúdo: 
    “Passo 1: Instalando as bibliotecas e recarregando o ambiente”;
6. Insira um bloco de código com o conteúdo abaixo:

```python
 !pip install -U pip setuptools wheel
 !pip install -U spacy
 !python -m spacy download en_core_web_sm
 !pip install spacytextblob
 
 import pkg_resources,imp
 imp.reload(pkg_resources) 
```

7. Execute o código acima. Durante o processo, caso receba, na tela, a mensagem dizendo que a sessão precisa ser reiniciada, clique no respectivo botão;
8. Insira um novo bloco de texto com o conteúdo: 
    “Passo 2: Importando as bibliotecas para análise de sentimento”;
9. Insira um bloco de código com as linhas abaixo e execute: 

```python
import spacy from spacytextblob.spacytextblob 
import SpacyTextBlob 
```

10. Insira um novo bloco de texto com o conteúdo: 
    “Passo 3: Definindo o modelo e a pipeline a serem utilizadas na análise”;
11. Crie um bloco de código com as linhas abaixo e execute: 

```python
nlp = spacy.load('en_core_web_sm')
nlp.add_pipe('spacytextblob') 
```

12. Insira um novo bloco de texto com o conteúdo: 
    “Passo 4: Definindo o texto inicial a ser analisado para verificação/validação da biblioteca”;
13. Crie um bloco de código com o conteúdo abaixo e o execute:

```python
user_input = 'This is a wonderful campsite. I loved the serenity and the birds chirping in the morning.'
doc = nlp(user_input) 
```

14. Insira um novo bloco de texto com o conteúdo: 
    “Passo 5: Exibindo o resultado da primeira análise (um range entre -1 [avaliação negativa] e 1 [avaliação positiva]”;
15. Crie um bloco de código com as linhas abaixo e o execute: 

```python
input_polarity = doc._.polarity
sentiment = { 
	'score': input_polarity
	}
print(sentiment) 
```

16. Insira um novo bloco de texto com o conteúdo: 
    “Passo 6: Definindo a lista de tweets a serem
analisadas”; 
17. Insira um bloco de código com as linhas abaixo e execute: 

```python
tweets = [ 
	"Bayer Leverkusen goalkeeper Bernd Leno will not be going to Napoli. His agent Uli Ferber to Bild: I can confirm that there were negotiations with Napoli, which we have broken off. Napoli is not an option. Atletico Madrid and Arsenal are the other strong rumours. #B04 #AFC",
	"Gary Speed v Blackburn at St James in 2001/02 anyone? #NUFC #BEL #JAP #WorldCup",
	"@ChelseaFC Don't make him regret it and start him over Hoofiz",
	"@LiverpoolFF @AnfieldEdition He's a liar, made up. I've unfollowed him as loads of others have. Pure blagger. #LFC",
	"@theesk @Everton Didn't realise Kenwright is due to leave at the end of the month. In all seriousness could you see him being interested in us?", 
	"@hasanshahbaz19 @LFC My knowledge has decreased somewhat in the past few seasons",
	"Report: Linked with #Everton and #Wolves, Italians set to sign £4.5m-rated winger",
	"Am seeing tweets that there’s been a fall out @Everton between the money men... I’m presuming it’s just a quiet news day or some kopite with nothing better to do! @ALANMYERSMEDIA",
	"@LFC @officialAL20 @IntChampionsCup @ManUtd Expect loads of excuses after tonight’s game",
	"@MartinDiamond17 @azryahmad @Baren_D @Mathewlewis1997 @iamheinthu @DiMarzio @Alissonbecker @LFC @SkySportsNews @SkySport @OfficialASRoma I’m just fine I have your fanbase angry over stating facts should ask them hun. Xo",
	"What a weekend of football results! @ManUtd @Glentoran @RangersFC &amp; Hearts ????",
	"@ChelseaFC For the first time in a long while, my heart was relaxed while watching Chelsea. Really enjoyed it today. Come on, CHELSEA!!!",
	"@ChelseaFC @CesarAzpi What a fantastic signing worth every single penny ??",
	"Pogba scores, Pogba assists. But tomorrow papers won't be telling you this, instead they will tell you how he'll end up at Juve because he's unhappy, frustrated, have grudges with Mourinho and so on and so forth #mufc",
	"@WestHamUtd we need to keep @CH14_ and get @HirvingLozano70 to compliment",
	"@kevdev9 @Everton Shouldn’t be happening! Needs to stay away with his venomous attitude until he is sold!",
	"@brfootball @aguerosergiokun @ManCity What a genius. Pep taking winning mentality with him, conquering league after league. Baller",
	"@HMZ0709 Can we get a RT for our #lfc Mo Salah Liverpool Enamel Pin Badge"
	] 
```

18. Insira um novo bloco de texto com o conteúdo: 
    “Passo 7: Analisando os tweets”;
19. Insira e executa o bloco de código abaixo:

```python
for item in tweets: 
	doc = nlp(item) 
	input_polarity = doc._.polarity 
	sentiment = { 
		'tweet': item, 
		'score': input_polarity 
		} 
	print(sentiment) 
```

20. Por fim, caso queira, você poderá salvar uma cópia do código no Google Drive ou no Github. Tais opções encontram-se disponíveis a partir do menu Arquivo. 

<br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo05)

