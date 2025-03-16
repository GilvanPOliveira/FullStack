import 'package:flutter/material.dart';
import 'Microatividades/microatividade2.dart' as m2;
import 'Microatividades/microatividade3.dart' as m3;
import 'Microatividades/microatividade4.dart' as m4;
import 'Microatividades/microatividade5.dart' as m5;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Microatividades',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.blue,
          titleTextStyle: TextStyle(
            color: Colors.white,
            fontSize: 20,
          ),
        ),
      ),
      home: const MicroatividadeMenu(),
    );
  }
}

// Página principal com o menu e Microatividade 2 exibida por padrão
class MicroatividadeMenu extends StatefulWidget {
  const MicroatividadeMenu({super.key});

  @override
  State<MicroatividadeMenu> createState() => _MicroatividadeMenuState();
}

class _MicroatividadeMenuState extends State<MicroatividadeMenu> {
  // Exibe a Microatividade 2 por padrão
  Widget _currentPage = const m2.Microatividade2();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      appBar: AppBar(
        title: const Text('Microatividades'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _currentPage = const m2.Microatividade2();
                  });
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.blue,
                ),
                child: const Text('2'),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _currentPage = const m3.Microatividade3();
                  });
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.blue,
                ),
                child: const Text('3'),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _currentPage = const m4.Microatividade4();
                  });
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.blue,
                ),
                child: const Text('4'),
              ),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _currentPage = const m5.Microatividade5();
                  });
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.blue,
                ),
                child: const Text('5'),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Expanded(
              child:
                  _currentPage), // Garante que a página se expanda corretamente
        ],
      ),
    );
  }
}
