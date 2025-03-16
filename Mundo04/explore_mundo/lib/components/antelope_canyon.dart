import 'package:flutter/material.dart';

class AntelopeCanyon extends StatefulWidget {
  const AntelopeCanyon({super.key});

  @override
  AntelopeCanyonState createState() => AntelopeCanyonState();
}

class AntelopeCanyonState extends State<AntelopeCanyon> {
  PageController pageController = PageController();
  int currentPage = 0;
  bool isLiked = false;
  int likeCount = 32;

  @override
  Widget build(BuildContext context) {
    List<String> imagens = [
      'lib/assets/images/Antelope_Canyon_1.jpeg',
      'lib/assets/images/Antelope_Canyon_2.jpeg',
      'lib/assets/images/Antelope_Canyon_3.jpeg'
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Antelope Canyon'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20.0),
          child: Column(
            children: [
              SizedBox(
                height: 250.0,
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
                          currentPage = (index - 1) %
                              imagens.length;
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
                              margin:
                                  const EdgeInsets.symmetric(horizontal: 4.0),
                              width: currentPage == index ? 16.0 : 8.0,
                              height: 8.0,
                              decoration: BoxDecoration(
                                color: currentPage == index
                                    ? Colors.white
                                    : Colors.white.withOpacity(0.5),
                                borderRadius: BorderRadius.circular(4.0),
                              ),
                            );
                          })),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              _buildTitleSection(),
              const SizedBox(height: 16),
              _buildButtonSection(),
              const SizedBox(height: 16),
              _buildTextSection(),
              const SizedBox(height: 16),
              _buildPackageSection(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTitleSection() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Antelope Canyon',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 22),
                ),
                Text(
                  'América do Norte: Antelope Canyon, Arizona, EUA',
                  style: TextStyle(color: Colors.grey, fontSize: 16),
                ),
              ],
            ),
          ),
          Row(
            children: [
              IconButton(
                icon: Icon(
                  isLiked ? Icons.star : Icons.star_border,
                  color: isLiked ? Colors.red : Colors.grey,
                ),
                onPressed: () {
                  setState(() {
                    isLiked = !isLiked;
                    likeCount += isLiked ? 1 : -1;
                  });
                },
              ),
              Text('$likeCount'),
            ],
          ),
          const SizedBox(width: 8),
        ],
      ),
    );
  }

  Widget buildButtonColumn(Color color, IconData icon, String label) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(icon, color: color),
        Container(
          margin: const EdgeInsets.only(top: 8),
          child: Text(
            label,
            style: TextStyle(
                fontSize: 12, fontWeight: FontWeight.w400, color: color),
          ),
        ),
      ],
    );
  }

  Widget _buildButtonSection() {
    const Color color = Colors.blue;

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        buildButtonColumn(color, Icons.call, 'CALL'),
        buildButtonColumn(color, Icons.near_me, 'ROUTE'),
        buildButtonColumn(color, Icons.share, 'SHARE'),
      ],
    );
  }

  Widget _buildTextSection() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: const Text(
        'Cânion de arenito formado pela erosão, conhecido por suas paredes ondulantes e feixes de luz espetaculares. '
        'Localizado na reserva Navajo, oferece tours guiados pelos nativos americanos.',
        softWrap: true,
        textAlign: TextAlign.justify,
        style: TextStyle(fontSize: 16),
      ),
    );
  }

  Widget _buildPackageSection() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: const Text(
        'Valores Estimados: R\$ 7.000 - R\$ 10.000',
        style: TextStyle(fontSize: 16),
      ),
    );
  }
}
