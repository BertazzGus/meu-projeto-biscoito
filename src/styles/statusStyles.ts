import { StyleSheet } from 'react-native';

export 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8ecf5',
  },

  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  statusTexto: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },

  ativo: {
    color: 'green',
  },

  inativo: {
    color: 'red',
  },

  contador: {
    fontSize: 18,
    marginBottom: 24,
  },
  
  botaoPrimario: {
    backgroundColor: '#00fa21',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginBottom: 20,
    width: 220,
    alignItems: 'center',
  },

  botaoSecundario: {
    backgroundColor: '#6d4141',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: 220,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  imagemBiscoito: {
    width: 260,
    height: 190,
    marginBottom: 28,
  },

  fraseBox: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  
  fraseTexto: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 28,
  },
  
});
