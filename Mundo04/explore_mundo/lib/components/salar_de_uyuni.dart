import 'package:flutter/material.dart';

class SalarDeUyuni extends StatefulWidget {
  const SalarDeUyuni({super.key});

  @override
  SalarDeUyuniState createState() => SalarDeUyuniState();
}

class SalarDeUyuniState extends State<SalarDeUyuni> {
  PageController pageController = PageController();
  int currentPage = 0;
  bool isLiked = false;
  int likeCount = 20;

  @override
  Widget build(BuildContext context) {
    List<String> imagens = [
      'lib/assets/images/Salar_de_Uyuni_1.jpeg',
      'lib/assets/images/Salar_de_Uyuni_2.jpeg',
      'lib/assets/images/Salar_de_Uyuni_3.jpeg'
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Salar de Uyuni'),
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
                  'Salar de Uyuni',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 22),
                ),
                Text(
                  'Bolívia',
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
        'Maior planície de sal do mundo, cobrindo mais de 10.000 km². Durante a estação chuvosa, uma fina camada de água transforma o local em um gigantesco espelho natural.',
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
        'Valores Estimados: R\$ 5.000 - R\$ 8.000',
        style: TextStyle(fontSize: 16),
      ),
    );
  }
}
