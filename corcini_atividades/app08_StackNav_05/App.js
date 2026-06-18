// Copied from App_Loop_04/App.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const txtAppNome     = 'ELEMENTS';
const txtAppSub      = 'REACTNATIVE';
const txtRodapeMore  = 'MORE';

const corFundo         = '#FFFFFF';
const corHeader        = '#FFFFFF';
const corBorda         = '#E8E8E8';
const corTextoMenu     = '#444444';
const corTextoNome     = '#222222';
const corTextoCargo    = '#888888';
const corIcone         = '#888888';
const corSeta          = '#CCCCCC';
const corRodapeFundo   = '#F7F7F7';
const corRodapeAtivo   = '#2196F3';
const corRodapeIcone   = '#AAAAAA';
const corTitulo        = '#2196F3';

const fonteApp       = 20;
const fonteSub       = 9;
const fonteMenu      = 15;
const fonteNome      = 14;
const fonteCargo     = 12;
const fonteRodape    = 10;

const menuItens = [
  { id: 1, icone: '📅', label: 'Appointments' },
  { id: 2, icone: '✈️', label: 'Trips'         },
  { id: 3, icone: '🔑', label: 'Passwords'     },
  { id: 4, icone: '💡', label: 'Pitches'       },
  { id: 5, icone: '🔄', label: 'Updates'       },
];

const contatos = [
  { id: 1, nome: 'Amy Farha',      cargo: 'Vice President',  foto: { uri: 'https://picsum.photos/seed/amy/44/44'      } },
  { id: 2, nome: 'Chris Jackson',  cargo: 'Vice Chairman',   foto: { uri: 'https://picsum.photos/seed/chris/44/44'    } },
  { id: 3, nome: 'Amanda Martin',  cargo: 'CEO',             foto: { uri: 'https://picsum.photos/seed/amanda/44/44'   } },
  { id: 4, nome: 'Christy Thomas', cargo: 'Lead Developer',  foto: { uri: 'https://picsum.photos/seed/christy/44/44'  } },
  { id: 5, nome: 'Melissa Jones',  cargo: 'CTO',             foto: { uri: 'https://picsum.photos/seed/melissa/44/44'  } },
];

const rodapeItens = [
  { id: 1, icone: '🔥', label: ''     , ativo: false },
  { id: 2, icone: '🖥️', label: ''     , ativo: false },
  { id: 3, icone: '📋', label: ''     , ativo: false },
  { id: 4, icone: '💲', label: ''     , ativo: false },
  { id: 5, icone: '☰',  label: 'MORE' , ativo: true  },
];

function renderMenuItens() {
  const elementos = [];
  for (let i = 0; i < menuItens.length; i++) {
    const item = menuItens[i];
    elementos.push(
      <TouchableOpacity key={item.id} style={styles.menuLinha}>
        <Text style={[styles.menuIcone, { color: corIcone }]}>{item.icone}</Text>
        <Text style={[styles.menuLabel, { fontSize: fonteMenu, color: corTextoMenu }]}>
          {item.label}
        </Text>
        <Text style={[styles.seta, { color: corSeta }]}>›</Text>
      </TouchableOpacity>
    );
  }
  return elementos;
}

function renderContatos() {
  const elementos = [];
  for (let i = 0; i < contatos.length; i++) {
    const pessoa = contatos[i];
    elementos.push(
      <TouchableOpacity key={pessoa.id} style={styles.contatoLinha}>
        <Image source={pessoa.foto} style={styles.avatar} />
        <View style={styles.contatoTextos}>
          <Text style={[styles.contatoNome, { fontSize: fonteNome, color: corTextoNome }]}> 
            {pessoa.nome}
          </Text>
          <Text style={[styles.contatoCargo, { fontSize: fonteCargo, color: corTextoCargo }]}> 
            {pessoa.cargo}
          </Text>
        </View>
        <Text style={[styles.seta, { color: corSeta }]}>›</Text>
      </TouchableOpacity>
    );
  }
  return elementos;
}

function renderRodape() {
  const elementos = [];
  for (let i = 0; i < rodapeItens.length; i++) {
    const btn = rodapeItens[i];
    const cor = btn.ativo ? corRodapeAtivo : corRodapeIcone;
    elementos.push(
      <TouchableOpacity key={btn.id} style={styles.rodapeBtn}>
        <Text style={[styles.rodapeIcone, { color: cor }]}>{btn.icone}</Text>
        {btn.label !== '' && (
          <Text style={[styles.rodapeLabel, { fontSize: fonteRodape, color: cor }]}> 
            {btn.label}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
  return elementos;
}

export default function App() {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: corFundo }]}> 
      <StatusBar barStyle="dark-content" backgroundColor={corHeader} />

      <View style={[styles.header, { backgroundColor: corHeader, borderBottomColor: corBorda }]}> 
        <Text style={[styles.appSub, { fontSize: fonteSub, color: corTextoCargo }]}> 
          {txtAppSub}
        </Text>
        <Text style={[styles.appNome, { fontSize: fonteApp, color: corTitulo }]}> 
          {txtAppNome}
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.secao, { borderBottomColor: corBorda }]}> 
          {renderMenuItens()} 
        </View>

        <View style={styles.secao}> 
          {renderContatos()} 
        </View>

      </ScrollView>

      <View style={[styles.rodape, { backgroundColor: corRodapeFundo, borderTopColor: corBorda }]}> 
        {renderRodape()} 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  appSub: {
    letterSpacing: 3,
    fontWeight: '400',
  },
  appNome: {
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  secao: {
    borderBottomWidth: 1,
  },
  menuLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EFEFEF',
  },
  menuIcone: {
    fontSize: 18,
    width: 32,
  },
  menuLabel: {
    flex: 1,
  },
  seta: {
    fontSize: 22,
    fontWeight: '300',
  },
  contatoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EFEFEF',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    backgroundColor: '#DDD',
  },
  contatoTextos: {
    flex: 1,
  },
  contatoNome: {
    fontWeight: '600',
  },
  contatoCargo: {
    marginTop: 2,
  },
  rodape: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingVertical: 8,
  },
  rodapeBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rodapeIcone: {
    fontSize: 20,
  },
  rodapeLabel: {
    fontWeight: '600',
    marginTop: 2,
  },
});
