import React, { useState, useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/statusStyles';

const BISCOITO_FECHADO = require('../../assets/biscoito-fechado.jpeg');
const BISCOITO_BISCOITO = require('../../assets/biscoito-aberto.jpeg');

const FRASES_DA_SORTE: string[] = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Gente todo dia arruma os cabelos, por que não o coração?',
  'A sorte favorece a mente preparada.'
];

export default function BiscoitoDaSorte() {
  const [biscoitoAberto, setBiscoitoAberto] = useState(false);
  const [fraseSorteada, setFraseSorteada] = useState('');

  const quebrarBiscoito = useCallback(() => {
    const indice = Math.floor(Math.random() * FRASES_DA_SORTE.length);
    setFraseSorteada(FRASES_DA_SORTE[indice]);
    setBiscoitoAberto(true);
  }, []);

  const resetarBiscoito = useCallback(() => {
    setBiscoitoAberto(false);
    setFraseSorteada('');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biscoito da Sorte</Text>
      <Text style={styles.subtitulo}>
        Clique no botão para quebrar o biscoito e descobrir sua frase.
      </Text>

      <Image
        source={biscoitoAberto ? BISCOITO_BISCOITO : BISCOITO_FECHADO}
        style={styles.imagemBiscoito}
        resizeMode="contain"
      />

      <View style={styles.fraseBox}>
        <Text style={styles.fraseTexto}>
          {fraseSorteada || ''}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoPrimario} 
        onPress={quebrarBiscoito}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Quebrar biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botaoSecundario} 
        onPress={resetarBiscoito}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}