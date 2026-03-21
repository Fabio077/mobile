import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// ─────────────────────────────────────────
//  VARIÁVEIS DE TEXTO
// ─────────────────────────────────────────
const txtTitulo      = 'LAÇOS DE REPETIÇÃO';
const txtSubtitulo   = 'DSV MOBILE';
const txtLabelNome   = 'Nome:';
const txtLabelCurso  = 'Curso:';
const txtLabelSemestre = 'Semestre:';
const txtRodapeAutor = 'Fabio Rodrigues';
const txtRodapeData  = 'mes/ano';

// ─────────────────────────────────────────
//  VARIÁVEIS DE COR
// ─────────────────────────────────────────
const corFundoTela      = '#FFFFFF';
const corHeader         = '#8B0000';   // vermelho escuro
const corSubtitulo      = '#FFD700';   // amarelo dourado
const corFundoCard      = '#ADD8E6';   // azul claro
const corFundoImagem    = '#87CEEB';   // azul médio (placeholder)
const corBordaCard      = '#FFFFFF';
const corFontePrimaria  = '#000000';
const corFonteNome      = '#000000';
const corFonteCurso     = '#000000';
const corFonteLabel     = '#333333';
const corRodape         = '#8B0000';
const corRodapeTexto    = '#FFD700';

// ─────────────────────────────────────────
//  VARIÁVEIS DE TAMANHO DE FONTE
// ─────────────────────────────────────────
const fonteTitulo    = 22;
const fonteSubtitulo = 14;
const fonteNome      = 22;
const fonteDados     = 13;
const fonteLabel     = 12;
const fonteRodape    = 13;

// ─────────────────────────────────────────
//  ARRAY DE ALUNOS (dados)
// ─────────────────────────────────────────
const alunos = [
  { id: '1', nome: 'Alberto',  curso: 'ADS',   semestre: 5, foto: { uri: 'https://picsum.photos/seed/alberto/60/60'  } },
  { id: '2', nome: 'Eduardo',  curso: 'ESOFT',  semestre: 3, foto: { uri: 'https://picsum.photos/seed/eduardo/60/60'  } },
  { id: '3', nome: 'Maria',    curso: 'ESOFT',  semestre: 3, foto: { uri: 'https://picsum.photos/seed/maria/60/60'    } },
  { id: '4', nome: 'Luiz',     curso: 'ADS',   semestre: 4, foto: { uri: 'https://picsum.photos/seed/luiz/60/60'     } },
  { id: '5', nome: 'Isadora',  curso: 'DIR',   semestre: 8, foto: { uri: 'https://picsum.photos/seed/isadora/60/60'  } },
  { id: '6', nome: 'Jéssica',  curso: 'ADS',   semestre: 2, foto: { uri: 'https://picsum.photos/seed/jessica/60/60'  } },
  { id: '7', nome: 'Carlos',   curso: 'ESOFT',  semestre: 6, foto: { uri: 'https://picsum.photos/seed/carlos/60/60'   } },
  { id: '8', nome: 'Fernanda', curso: 'DIR',   semestre: 1, foto: { uri: 'https://picsum.photos/seed/fernanda/60/60' } },
];

// ─────────────────────────────────────────
//  COMPONENTE DE CARD (renderizado pelo FlatList)
// ─────────────────────────────────────────
const CardAluno = ({ item }) => (
  <View style={styles.card}>
    {/* Foto do aluno */}
    <Image source={item.foto} style={styles.cardImagem} />

    {/* Dados do aluno */}
    <View style={styles.cardDados}>
      <View style={styles.linhaDado}>
        <Text style={[styles.label, { fontSize: fonteLabel, color: corFonteLabel }]}>
          {txtLabelNome}
        </Text>
        <Text style={[styles.valorNome, { fontSize: fonteNome, color: corFonteNome }]}>
          {item.nome}
        </Text>
      </View>

      <View style={styles.linhaDado}>
        <Text style={[styles.label, { fontSize: fonteLabel, color: corFonteLabel }]}>
          {txtLabelCurso}
        </Text>
        <Text style={[styles.valorDado, { fontSize: fonteDados, color: corFonteCurso }]}>
          {item.curso}
        </Text>
      </View>

      <View style={styles.linhaDado}>
        <Text style={[styles.label, { fontSize: fonteLabel, color: corFonteLabel }]}>
          {txtLabelSemestre}
        </Text>
        <Text style={[styles.valorDado, { fontSize: fonteDados, color: corFonteCurso }]}>
          {item.semestre}
        </Text>
      </View>
    </View>
  </View>
);

// ─────────────────────────────────────────
//  COMPONENTE PRINCIPAL
// ─────────────────────────────────────────
export default function App() {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: corFundoTela }]}>
      <StatusBar barStyle="light-content" backgroundColor={corHeader} />

      {/* ── HEADER ── */}
      <View style={[styles.header, { backgroundColor: corHeader }]}>
        {/* Ícone / Logo */}
        <View style={styles.logoWrap}>
          <Text style={styles.logoEmoji}>📋⚛️</Text>
        </View>

        <Text style={[styles.titulo, { fontSize: fonteTitulo, color: corBordaCard }]}>
          {txtTitulo}
        </Text>

        <Text style={[styles.subtitulo, { fontSize: fonteSubtitulo, color: corSubtitulo }]}>
          {txtSubtitulo}
        </Text>
      </View>

      {/* ── LISTA DE ALUNOS (LAÇO) ── */}
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardAluno item={item} />}
        contentContainerStyle={styles.lista}
        style={{ backgroundColor: corFundoTela }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 6, backgroundColor: corFundoTela }} />
        )}
      />

      {/* ── RODAPÉ ── */}
      <View style={[styles.rodape, { backgroundColor: corRodape }]}>
        <Text style={[styles.rodapeTexto, { fontSize: fonteRodape, color: corRodapeTexto }]}>
          {txtRodapeAutor}
        </Text>
        <Text style={[styles.rodapeTexto, { fontSize: fonteRodape, color: corRodapeTexto }]}>
          {txtRodapeData}
        </Text>
      </View>
    </SafeAreaView>
  );
}

// ─────────────────────────────────────────
//  ESTILOS
// ─────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  /* Header */
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  logoWrap: {
    marginBottom: 6,
  },
  logoEmoji: {
    fontSize: 40,
  },
  titulo: {
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 2,
    letterSpacing: 2,
  },

  /* Lista */
  lista: {
    padding: 8,
  },

  /* Card */
  card: {
    flexDirection: 'row',
    backgroundColor: '#ADD8E6',
    borderRadius: 6,
    overflow: 'hidden',
    alignItems: 'center',
    paddingRight: 10,
  },
  cardImagem: {
    width: 68,
    height: 68,
    backgroundColor: '#87CEEB',
    margin: 8,
    borderRadius: 4,
  },
  cardDados: {
    flex: 1,
    paddingVertical: 8,
  },
  linhaDado: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginBottom: 1,
  },
  label: {
    fontWeight: '400',
    minWidth: 58,
  },
  valorNome: {
    fontWeight: 'bold',
  },
  valorDado: {
    fontWeight: 'bold',
  },

  /* Rodapé */
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rodapeTexto: {
    fontWeight: '500',
  },
});