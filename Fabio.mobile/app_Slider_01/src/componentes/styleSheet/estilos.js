import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#87CEEB',
    paddingTop: 20,
    paddingBottom: 20,
  },
  area_cabecalho: {
    backgroundColor: '#87CEEB',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#4a90a4',
  },
  img_cabecalho: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  titulo_cabecalho: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
  },
  area_conteudo: {
    flex: 1,
    backgroundColor: '#FFFF00',
    padding: 20,
    justifyContent: 'center',
  },
  texto_conteudo: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
    lineHeight: 20,
  },
  nome_usuario: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  input_nome: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  label_slider: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#000000',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  botao_adicionar: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  texto_botao: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  area_rodape: {
    backgroundColor: '#87CEEB',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 2,
    borderTopColor: '#4a90a4',
  },
  texto_rodape: {
    fontSize: 12,
    color: '#333',
  },
});
