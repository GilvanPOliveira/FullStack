import 'package:flutter/material.dart';

class Microatividade3 extends StatelessWidget {
  const Microatividade3({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Text(
              'Microatividade 3',
              style: TextStyle(fontSize: 20),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 5),
            Text(
              'Layout com Row e Column',
              style: TextStyle(fontSize: 16),
              textAlign: TextAlign.center,
            ),
          ],
        ),
        backgroundColor: Colors.blue,
        elevation: 6.0, // Adiciona sombra abaixo do AppBar
        shadowColor: Colors.black, // Cor da sombra
      ),
      body: const Column(
        children: [
          SizedBox(height: 40), // Margem para compensar o espaço da AppBar
          Expanded(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          Icon(
                            Icons.call,
                            color: Colors.blue,
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Call',
                            style: TextStyle(color: Colors.blue),
                          ),
                        ],
                      ),
                      Column(
                        children: <Widget>[
                          Icon(
                            Icons.near_me,
                            color: Colors.blue,
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Route',
                            style: TextStyle(color: Colors.blue),
                          ),
                        ],
                      ),
                      Column(
                        children: <Widget>[
                          Icon(
                            Icons.share,
                            color: Colors.blue,
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Share',
                            style: TextStyle(color: Colors.blue),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
