import 'package:flutter/material.dart';

class Sobre extends StatelessWidget {
  const Sobre({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sobre Nós'),
      ),
      body: const SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Bem-vindo à Explore Mundo!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 16),
            Text(
              'Quem Somos',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              'A Explore Mundo é uma agência de viagens dedicada a proporcionar experiências únicas e inesquecíveis para nossos clientes. Com anos de experiência no setor de turismo, oferecemos pacotes personalizados que atendem a todas as suas necessidades.',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Nossa Missão',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              'Nossa missão é conectar pessoas a destinos incríveis, promovendo uma experiência de viagem segura e prazerosa. Trabalhamos incansavelmente para garantir que cada viagem seja planejada com atenção aos detalhes e ao conforto de nossos clientes.',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Nossa Visão',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              'Ser a agência de viagens mais confiável e reconhecida, onde cada cliente se sinta especial e tenha a liberdade de explorar o mundo.',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Nossos Valores',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              '- Atendimento ao cliente de excelência\n- Transparência e honestidade\n- Respeito à diversidade cultural\n- Sustentabilidade em nossas operações',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'Entre em contato conosco para saber mais sobre nossos pacotes e serviços!',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 16),
            Text(
              'E-mail: contato@exploremundo.com\nTelefone: (11) 1234-5678',
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
