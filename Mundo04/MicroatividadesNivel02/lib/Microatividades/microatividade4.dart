import 'package:flutter/material.dart';

class Microatividade4 extends StatelessWidget {
  const Microatividade4({super.key});

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
                'Microatividade 4',
                style: TextStyle(fontSize: 20),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 5),
              Text(
                'Exemplo com ListView',
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
      body: Padding(
        padding: const EdgeInsets.only(
            top: 60, bottom: 20), // Ajuste do padding do body
        child: ListView(
          children: const <Widget>[
            ListTile(
              title: Text('Flutter'),
              subtitle: Text('Tudo é um widget'),
              leading: Icon(Icons.flash_on),
              trailing: Icon(Icons.keyboard_arrow_right),
            ),
            ListTile(
              title: Text('Dart'),
              subtitle: Text('É fácil'),
              leading: Icon(Icons.mood),
              trailing: Icon(Icons.keyboard_arrow_right),
            ),
            ListTile(
              title: Text('Firebase'),
              subtitle: Text('Combina com Flutter'),
              leading: Icon(Icons.whatshot),
              trailing: Icon(Icons.keyboard_arrow_right),
            ),
          ],
        ),
      ),
    );
  }
}
