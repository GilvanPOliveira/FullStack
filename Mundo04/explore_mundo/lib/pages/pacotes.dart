import 'package:flutter/material.dart';
import '../components/antelope_canyon.dart';
import '../components/salar_de_uyuni.dart';
import '../components/lago_oeschinen.dart';
import '../components/zhangjiajie.dart';
import '../components/ngorongoro.dart';
import '../components/cavernas_waitomo.dart';

class Pacotes extends StatefulWidget {
  const Pacotes({super.key});

  @override
  PacotesState createState() => PacotesState();
}

class PacotesState extends State<Pacotes> {
  final Map<String, bool> favoritos = {};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pacotes de Viagem'),
      ),
      body: ListView(
        children: [
          buildPacoteCard(
            context,
            'Antelope Canyon',
            'América do Norte',
            'R\$ 7.000 - R\$ 10.000',
            [
              'lib/assets/images/Antelope_Canyon_1.jpeg',
              'lib/assets/images/Antelope_Canyon_2.jpeg',
              'lib/assets/images/Antelope_Canyon_3.jpeg'
            ],
            const AntelopeCanyon(),
          ),
          buildPacoteCard(
            context,
            'Salar de Uyuni',
            'América do Sul',
            'R\$ 5.000 - R\$ 8.000',
            [
              'lib/assets/images/Salar_de_Uyuni_1.jpeg',
              'lib/assets/images/Salar_de_Uyuni_2.jpeg',
              'lib/assets/images/Salar_de_Uyuni_3.jpeg'
            ],
            const SalarDeUyuni(),
          ),
          buildPacoteCard(
            context,
            'Lago Oeschinen',
            'Europa',
            'R\$ 6.000 - R\$ 9.000',
            [
              'lib/assets/images/Lago_Oeschinensee_1.jpeg',
              'lib/assets/images/Lago_Oeschinensee_2.jpeg',
              'lib/assets/images/Lago_Oeschinensee_3.jpeg'
            ],
            const LagoOeschinen(),
          ),
          buildPacoteCard(
            context,
            'Zhangjiajie National Forest Park',
            'Ásia',
            'R\$ 7.000 - R\$ 11.000',
            [
              'lib/assets/images/Zhangjiajie_Park_1.jpeg',
              'lib/assets/images/Zhangjiajie_Park_2.jpeg',
              'lib/assets/images/Zhangjiajie_Park_3.jpeg'
            ],
            const Zhangjiajie(),
          ),
          buildPacoteCard(
            context,
            'Nacional Ngorongoro Park',
            'África',
            'R\$ 9.000 - R\$ 13.000',
            [
              'lib/assets/images/Ngorongoro_Park_1.jpeg',
              'lib/assets/images/Ngorongoro_Park_2.jpeg',
              'lib/assets/images/Ngorongoro_Park_3.jpeg'
            ],
            const Ngorongoro(),
          ),
          buildPacoteCard(
            context,
            'Cavernas Waitomo',
            'Oceania',
            'R\$ 8.000 - R\$ 12.000',
            [
              'lib/assets/images/Cavernas_Waitomo_1.jpeg',
              'lib/assets/images/Cavernas_Waitomo_2.jpeg',
              'lib/assets/images/Cavernas_Waitomo_3.jpeg'
            ],
            const CavernasWaitomo(),
          ),
        ],
      ),
    );
  }

  Widget buildPacoteCard(BuildContext context, String nome, String origem,
      String valor, List<String> imagens, Widget detalhesPage) {
    PageController pageController = PageController();
    int currentPage = 0;

    return StatefulBuilder(
      builder: (context, setState) {
        return Card(
          margin: const EdgeInsets.all(10.0),
          child: Column(
            children: [
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => detalhesPage),
                  );
                },
                child: SizedBox(
                  height: 200.0,
                  child: Stack(
                    children: [
                      PageView.builder(
                        controller: pageController,
                        itemCount: imagens.length + 2, 
                        onPageChanged: (index) {
                          if (index == 0) {
                            pageController.jumpToPage(imagens.length);
                          } else if (index == imagens.length + 1) {
                            pageController.jumpToPage(1);
                          }
                          setState(() {
                            currentPage = (index - 1) % imagens.length;
                          });
                        },
                        itemBuilder: (context, index) {
                          if (index == 0) {
                            return Image.asset(
                              imagens[imagens.length - 1],
                              fit: BoxFit.cover,
                            );
                          } else if (index == imagens.length + 1) {
                            return Image.asset(
                              imagens[0],
                              fit: BoxFit.cover,
                            );
                          } else {
                            return Image.asset(
                              imagens[index - 1],
                              fit: BoxFit.cover,
                            );
                          }
                        },
                      ),
                      Positioned(
                        bottom: 10.0,
                        left: 0.0,
                        right: 0.0,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: List.generate(imagens.length, (index) {
                            return AnimatedContainer(
                              duration: const Duration(milliseconds: 300),
                              margin: const EdgeInsets.symmetric(horizontal: 4.0),
                              width: currentPage == index ? 16.0 : 8.0,
                              height: 8.0,
                              decoration: BoxDecoration(
                                color: currentPage == index
                                    ? Colors.white
                                    : Colors.white.withOpacity(0.5),
                                borderRadius: BorderRadius.circular(4.0),
                              ),
                            );
                          }),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              ListTile(
                title: Text(nome),
                subtitle: Text('$origem - $valor'),
                trailing: IconButton(
                  icon: Icon(
                    favoritos[nome] == true
                        ? Icons.star
                        : Icons.star_border,
                    color: favoritos[nome] == true ? Colors.red : Colors.grey,
                  ),
                  onPressed: () {
                    setState(() {
                      favoritos[nome] = !(favoritos[nome] ?? false);
                    });
                  },
                ),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => detalhesPage),
                  );
                },
              ),
            ],
          ),
        );
      },
    );
  }
}