import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  conteudo: {
    backgroundColor: '#993399',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
    color: '#FFFF00',
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
  

  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end',

  },
});