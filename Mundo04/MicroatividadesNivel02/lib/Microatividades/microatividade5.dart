import 'package:flutter/material.dart';

class Microatividade5 extends StatelessWidget {
  const Microatividade5({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Padding(
          padding: EdgeInsets.only(top: 10),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Text(
                'Microatividade 5',
                style: TextStyle(fontSize: 20),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 3),
              Text(
                'Exemplo com Stack e Texto no Canto Superior Direito',
                style: TextStyle(fontSize: 16),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 10),
            ],
          ),
        ),
        backgroundColor: Colors.blue,
        elevation: 6.0, // Adiciona sombra abaixo do AppBar
        shadowColor: Colors.black, // Cor da sombra
      ),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Primeiro container azul
            Container(
              width: 250,
              height: 250,
              color: Colors.blue,
              child: const Stack(
                children: [
                  Positioned(
                    top: 3,
                    right: 10,
                    child: Text(
                      'Azul',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // Segundo container vermelho
            Container(
              width: 200,
              height: 200,
              color: Colors.red,
              child: const Stack(
                children: [
                  Positioned(
                    top: 3,
                    right: 10,
                    child: Text(
                      'Vermelho',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.blue,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            // Terceiro container amarelo
            Container(
              width: 150,
              height: 150,
              color: Colors.yellow,
              child: const Stack(
                children: [
                  Positioned(
                    top: 3,
                    right: 10,
                    child: Text(
                      'Amarelo',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.red,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
