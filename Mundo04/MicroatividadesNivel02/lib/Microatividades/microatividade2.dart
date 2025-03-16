import 'package:flutter/material.dart';

class Microatividade2 extends StatelessWidget {
  const Microatividade2({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Olá Flutter - MaterialApp',
          style: TextStyle(
            color: Colors.white,
          ),
        ),
        backgroundColor: Colors.blue,
        elevation: 6.0, // Adiciona sombra abaixo do AppBar
        shadowColor: Colors.black, // Cor da sombra
      ),
      body: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Microatividade 2',
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 10), // Espaçamento entre os textos
            Text(
              'Macoratti.net',
              style: TextStyle(fontSize: 24),
            ),
          ],
        ),
      ),
    );
  }
}
