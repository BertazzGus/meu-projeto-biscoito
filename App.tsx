import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface AppState {
  textoFrase: string;
  imgBiscoito: ImageSourcePropType;
}

class App extends Component<{}, AppState> {
  private frases: string[] = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'A sorte favorece a mente preparada.'
  ];

  constructor(props: {}) {
    super(props);

    this.state = {
      textoFrase: '',
      imgBiscoito: { uri: 'https://raw.githubusercontent.com/sujeitoprogramador/biscoito-app/master/src/biscoito.png' }
    };
  }

  quebrarBiscoito = () => {
    const numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      imgBiscoito: { uri: 'https://raw.githubusercontent.com/sujeitoprogramador/biscoito-app/master/src/biscoitoAberto.png' }
    });
  };

  reiniciarBiscoito = () => {
    this.setState({
      textoFrase: '',
      imgBiscoito: { uri: 'https://raw.githubusercontent.com/sujeitoprogramador/biscoito-app/master/src/biscoito.png' }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.imgBiscoito}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={this.reiniciarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, styles.btnTextoReiniciar]}>Reiniciar</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5DC'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#DD7B22',
    borderRadius: 25,
    marginTop: 10
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22'
  },
  botaoReiniciar: {
    borderColor: '#333333',
    marginTop: 15
  },
  btnTextoReiniciar: {
    color: '#333333'
  }
});

export default App;
