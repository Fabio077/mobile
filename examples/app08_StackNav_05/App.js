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

// ─────────────────────────────────────────
//  VARIÁVEIS DE TEXTO
// ─────────────────────────────────────────
const txtAppNome     = 'ELEMENTS';
const txtAppSub      = 'REACTNATIVE';
const txtRodapeMore  = 'MORE';

// ─────────────────────────────────────────
//  VARIÁVEIS DE COR
// ─────────────────────────────────────────
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

// ─────────────────────────────────────────
//  VARIÁVEIS DE FONTE
// ─────────────────────────────────────────
const fonteApp       = 20;
const fonteSub       = 9;
const fonteMenu      = 15;
const fonteNome      = 14;
const fonteCargo     = 12;
const fonteRodape    = 10;

// ─────────────────────────────────────────
//  DADOS – MENU SUPERIOR (array p/ for)
// ─────────────────────────────────────────
const menuItens = [
  { id: 1, icone: '📅', label: 'Appointments' },
  { id: 2, icone: '✈️', label: 'Trips'         },
  { id: 3, icone: '🔑', label: 'Passwords'     },
  { id: 4, icone: '💡', label: 'Pitches'       },
  { id: 5, icone: '🔄', label: 'Updates'       },
];

// ─────────────────────────────────────────
//  DADOS – CONTATOS (array p/ for)
// ─────────────────────────────────────────
const contatos = [
  { id: 1, nome: 'Amy Farha',      cargo: 'Vice President',  foto: { uri: 'https://picsum.photos/seed/amy/44/44'      } },
  { id: 2, nome: 'Chris Jackson',  cargo: 'Vice Chairman',   foto: { uri: 'https://picsum.photos/seed/chris/44/44'    } },
  { id: 3, nome: 'Amanda Martin',  cargo: 'CEO',             foto: { uri: 'https://picsum.photos/seed/amanda/44/44'   } },
  { id: 4, nome: 'Christy Thomas', cargo: 'Lead Developer',  foto: { uri: 'https://picsum.photos/seed/christy/44/44'  } },
  { id: 5, nome: 'Melissa Jones',  cargo: 'CTO',             foto: { uri: 'https://picsum.photos/seed/melissa/44/44'  } },
];

// ─────────────────────────────────────────
//  DADOS – RODAPÉ (array p/ for)
// ─────────────────────────────────────────
const rodapeItens = [
  { id: 1, icone: '🔥', label: ''     , ativo: false },
  { id: 2, icone: '🖥️', label: ''     , ativo: false },
  { id: 3, icone: '📋', label: ''     , ativo: false },
  { id: 4, icone: '💲', label: ''     , ativo: false },
  { id: 5, icone: '☰',  label: 'MORE' , ativo: true  },
];

// ─────────────────────────────────────────
//  GERAÇÃO COM FOR – Linhas de Menu
// ─────────────────────────────────────────
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

// ─────────────────────────────────────────
//  GERAÇÃO COM FOR – Cards de Contato
// ─────────────────────────────────────────
function renderContatos() {
  const elementos = [];
  for (let i = 0; i < contatos.length; i++) {
    const pessoa = contatos[i];
    elementos.push(
      <TouchableOpacity key={pessoa.id} style={styles.contatoLinha}>
        <Image source={pessoa.foto} style={styles.avatar} />
        <View style={styles.contatoTextos}>
          <Text style={[styles.contatoNome, { fontSize: fonteNome, color: corTextoNome }]}> 
