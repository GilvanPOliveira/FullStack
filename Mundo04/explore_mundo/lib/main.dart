import 'package:flutter/material.dart';
import './pages/login.dart';

void main() {
  runApp(const ExploreMundoApp());
}

class ExploreMundoApp extends StatelessWidget {
  const ExploreMundoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Explore Mundo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Login(),
    );
  }
}
