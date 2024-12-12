import 'package:flutter/material.dart';
import './destino.dart';
import './pacotes.dart';
import './contato.dart';
import './sobre.dart';
import './login.dart';
import '../components/antelope_canyon.dart';
import '../components/cavernas_waitomo.dart';
import '../components/lago_oeschinen.dart';
import '../components/ngorongoro.dart';
import '../components/salar_de_uyuni.dart';
import '../components/zhangjiajie.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  HomeState createState() => HomeState();
}

class HomeState extends State<Home> {
  final PageController _pageController = PageController(viewportFraction: 1.0);
  late final List<Map<String, dynamic>> destinos;
  late final List<Map<String, dynamic>> pacotes;
  int _currentPage = 0;
  final TextEditingController _searchController = TextEditingController();
  List<Map<String, dynamic>> _foundPackages = [];

  @override
  void initState() {
    super.initState();
    destinos = [
      _createDestino(
          'Lago Oeschinensee', ['lib/assets/images/Lago_Oeschinensee_1.jpeg']),
      _createDestino(
          'Antelope Canyon', ['lib/assets/images/Antelope_Canyon_2.jpeg']),
      _createDestino(
          'Cavernas Waitomo', ['lib/assets/images/Cavernas_Waitomo_3.jpeg']),
      _createDestino(
          'Ngorongoro Park', ['lib/assets/images/Ngorongoro_Park_1.jpeg']),
      _createDestino(
          'Salar de Uyuni', ['lib/assets/images/Salar_de_Uyuni_3.jpeg']),
      _createDestino('Zhangjiajie National Forest Park',
          ['lib/assets/images/Zhangjiajie_Park_1.jpeg']),
    ];

    pacotes = [
      {
        'nome': 'Antelope Canyon',
        'origem': 'América do Norte',
        'valor': 'R\$ 7.000 - R\$ 10.000',
        'imagens': [
          'lib/assets/images/Antelope_Canyon_1.jpeg',
          'lib/assets/images/Antelope_Canyon_2.jpeg',
          'lib/assets/images/Antelope_Canyon_3.jpeg'
        ],
      },
      {
        'nome': 'Salar de Uyuni',
        'origem': 'América do Sul',
        'valor': 'R\$ 5.000 - R\$ 8.000',
        'imagens': [
          'lib/assets/images/Salar_de_Uyuni_1.jpeg',
          'lib/assets/images/Salar_de_Uyuni_2.jpeg',
          'lib/assets/images/Salar_de_Uyuni_3.jpeg'
        ],
      },
      {
        'nome': 'Lago Oeschinensee',
        'origem': 'Europa',
        'valor': 'R\$ 6.000 - R\$ 9.000',
        'imagens': [
          'lib/assets/images/Lago_Oeschinensee_1.jpeg',
          'lib/assets/images/Lago_Oeschinensee_2.jpeg',
          'lib/assets/images/Lago_Oeschinensee_3.jpeg'
        ],
      },
      {
        'nome': 'Cavernas Waitomo',
        'origem': 'Nova Zelândia',
        'valor': 'R\$ 4.000 - R\$ 6.000',
        'imagens': [
          'lib/assets/images/Cavernas_Waitomo_1.jpeg',
          'lib/assets/images/Cavernas_Waitomo_2.jpeg',
          'lib/assets/images/Cavernas_Waitomo_3.jpeg'
        ],
      },
      {
        'nome': 'Ngorongoro Park',
        'origem': 'Tanzânia',
        'valor': 'R\$ 8.000 - R\$ 12.000',
        'imagens': [
          'lib/assets/images/Ngorongoro_Park_1.jpeg',
          'lib/assets/images/Ngorongoro_Park_2.jpeg',
          'lib/assets/images/Ngorongoro_Park_3.jpeg'
        ],
      },
      {
        'nome': 'Zhangjiajie National Forest Park',
        'origem': 'China',
        'valor': 'R\$ 7.000 - R\$ 10.000',
        'imagens': [
          'lib/assets/images/Zhangjiajie_Park_1.jpeg',
          'lib/assets/images/Zhangjiajie_Park_2.jpeg',
          'lib/assets/images/Zhangjiajie_Park_3.jpeg'
        ],
      },
    ];
  }

  Map<String, dynamic> _createDestino(String nome, List<String> imagens) {
    return {
      'nome': nome,
      'imagens': imagens,
    };
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset:
          true,
      appBar: AppBar(
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SizedBox(width: 50),
            const Text('Explore Mundo'),
            IconButton(
              icon: const Icon(Icons.logout, color: Colors.red),
              onPressed: _showLogoutAlert,
            ),
          ],
        ),
      ),
      body: ListView(
        padding: EdgeInsets.zero,
        children: [
          _buildNavigationMenu(context),
          _buildImageSlider(),
          const SizedBox(height: 6.0),
          _buildSearchBar(),
          if (_foundPackages.isNotEmpty) _buildFoundPackagesList(),
        ],
      ),
    );
  }

  void _showLogoutAlert() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Logout'),
          content: const Text('Você deseja sair da conta?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('Cancelar'),
            ),
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => const Login()),
                );
              },
              child: const Text('Sair', style: TextStyle(color: Colors.red)),
            ),
          ],
        );
      },
    );
  }

  Widget _buildNavigationMenu(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10.0),
      color: Colors.blueAccent,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildMenuItem(context,
              icon: Icons.location_on,
              label: 'Destinos',
              page: const Destino()),
          _buildMenuItem(context,
              icon: Icons.card_travel,
              label: 'Pacotes de Viagem',
              page: const Pacotes()),
          _buildMenuItem(context,
              icon: Icons.contact_mail,
              label: 'Contato',
              page: const Contato()),
          _buildMenuItem(context,
              icon: Icons.info, label: 'Sobre Nós', page: const Sobre()),
        ],
      ),
    );
  }

  Widget _buildMenuItem(BuildContext context,
      {required IconData icon, required String label, Widget? page}) {
    return Column(
      children: [
        IconButton(
          icon: Icon(icon, size: 30.0, color: Colors.white),
          onPressed: () {
            if (page != null) {
              Navigator.push(
                  context, MaterialPageRoute(builder: (context) => page));
            }
          },
        ),
        Opacity(
          opacity: 0.7,
          child: Text(
            label,
            style: const TextStyle(
                color: Colors.white, fontSize: 10, fontWeight: FontWeight.w400),
          ),
        ),
      ],
    );
  }

  Widget _buildImageSlider() {
    return SizedBox(
      height: 250,
      child: Stack(
        children: [
          PageView.builder(
            controller: _pageController,
            itemCount: destinos.length * 2,
            onPageChanged: (index) {
              if (index == 0) {
                _pageController.jumpToPage(destinos.length);
              } else if (index == destinos.length * 2 - 1) {
                _pageController.jumpToPage(destinos.length - 1);
              }
              setState(() {
                _currentPage = index % destinos.length;
              });
            },
            itemBuilder: (context, index) {
              int destinoIndex = index % destinos.length;
              String localName = destinos[destinoIndex]['nome'];
              ImageProvider image =
                  AssetImage(destinos[destinoIndex]['imagens'][0]);

              return GestureDetector(
                onTap: () {
                  _navigateToDestination(localName);
                },
                child: Stack(
                  children: [
                    ClipRRect(
                      child: Image(
                        image: image,
                        fit: BoxFit.cover,
                        width: double.infinity,
                        height: double.infinity,
                      ),
                    ),
                    Positioned(
                      left: 10,
                      top: 10,
                      child: Container(
                        padding: const EdgeInsets.all(3.0),
                        color: Colors.black54,
                        child: Text(
                          localName,
                          style: const TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
          Positioned(
            bottom: 10.0,
            left: 0.0,
            right: 0.0,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(destinos.length, (index) {
                return Container(
                  margin: const EdgeInsets.symmetric(horizontal: 4.0),
                  width: _currentPage == index ? 16.0 : 8.0,
                  height: 8.0,
                  decoration: BoxDecoration(
                    color: _currentPage == index
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
    );
  }

  void _navigateToDestination(String nome) {
    Widget destinationPage;

    switch (nome) {
      case 'Antelope Canyon':
        destinationPage = const AntelopeCanyon();
        break;
      case 'Cavernas Waitomo':
        destinationPage = const CavernasWaitomo();
        break;
      case 'Lago Oeschinensee':
        destinationPage = const LagoOeschinen();
        break;
      case 'Ngorongoro Park':
        destinationPage = const Ngorongoro();
        break;
      case 'Salar de Uyuni':
        destinationPage = const SalarDeUyuni();
        break;
      case 'Zhangjiajie National Forest Park':
        destinationPage = const Zhangjiajie();
        break;
      default:
        return;
    }

    setState(() {
      _foundPackages.clear(); 
      _searchController.clear(); 
    });

    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => destinationPage),
    );
  }

  void _searchDestination(String query) {
    final results = pacotes
        .where((p) => p['nome'].toLowerCase().contains(query.toLowerCase()))
        .toList();

    setState(() {
      _foundPackages = results;
    });
  }

  Widget _buildSearchBar() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Buscar destinos...',
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(4.0)),
              ),
              style: const TextStyle(fontSize: 14),
              onSubmitted: (query) {
                _searchDestination(query);
              },
            ),
          ),
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {
              _searchDestination(_searchController.text);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildFoundPackagesList() {
    return Expanded(
      child: SingleChildScrollView(
        child: Column(
          children: _foundPackages.map((package) {
            return Card(
              child: ListTile(
                title: Text(package['nome']),
                subtitle: Text('${package['origem']} - ${package['valor']}'),
                leading:
                    Image.asset(package['imagens'][0], width: 50, height: 50),
                onTap: () {
                  _navigateToDestination(package['nome']);
                },
              ),
            );
          }).toList(),
        ),
      ),
    );
  }
}
