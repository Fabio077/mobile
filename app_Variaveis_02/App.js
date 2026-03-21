import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// ─────────────────────────────────────────
//  VARIÁVEIS DE TEXTO
// ─────────────────────────────────────────
const txtHeader =
  'Coisas do mundo!';

const txtCategories = 'Categories';
const txtTechnology = 'Technology';

const txtCard1 =
  'A tecnologia é o conjunto de conhecimentos e ferramentas que transforma o cotidiano, impulsionando o progresso social, econômico e educacional ao aumentar a produtividade e otimizar tarefas.';
const txtCard2 =
  'Empresas são entidades organizadas, formadas por pessoas, processos e produtos, que visam a produção de bens ou serviços para obter lucro.';
const txtCard3 =
  'Animais silvestres são espécies nativas ou migratórias que vivem livremente na natureza, sem depender de cuidados humanos. Ao contrário dos domésticos, eles não passaram por um processo de domesticação. Sua presença é fundamental para o equilíbrio dos ecossistemas, e retirá-los do habitat causa sofrimento e desequilíbrio ambiental.';

// ─────────────────────────────────────────
//  VARIÁVEIS DE COR
// ─────────────────────────────────────────
const corFundoTela     = '#F5F7FA';
const corFundoHeader   = '#FFFFFF';
const corFundoSecao    = '#4A90D9';   // azul do bloco "Categories"
const corIconPhone     = '#F5A623';   // laranja
const corIconPet       = '#9B59B6';   // roxo
const corIconGrid      = '#2ECC71';   // verde
const corFundoCard     = '#D6E4F7';   // azul claro dos cards
const corBarraAmarela  = '#F5A623';
const corBarraAzul     = '#4A90D9';
const corBarraVerde    = '#2ECC71';
const corFontePrimaria = '#2C3E50';
const corFonteSecundaria = '#7F8C8D';
const corBranco        = '#FFFFFF';
const corNotificacao   = '#E74C3C';

// ─────────────────────────────────────────
//  VARIÁVEIS DE TAMANHO DE FONTE
// ─────────────────────────────────────────
const fonteHeader   = 13;
const fonteTitulo   = 17;
const fonteCardNum  = 20;
const fonteCardText = 12;

// ─────────────────────────────────────────
//  IMAGENS (URLs públicas via picsum)
// ─────────────────────────────────────────
const imgCard1 = { uri: 'https://picsum.photos/seed/tech1/90/90' };
const imgCard2 = { uri: 'https://picsum.photos/seed/tech2/90/90' };
const imgCard3 = { uri: 'https://picsum.photos/seed/tech3/90/90' };

const imgAvatar = { uri: 'https://picsum.photos/seed/avatar/40/40' };

// ─────────────────────────────────────────
//  COMPONENTE PRINCIPAL
// ─────────────────────────────────────────
export default function App() {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: corFundoTela }]}>
      <StatusBar barStyle="dark-content" backgroundColor={corFundoTela} />

      <ScrollView
        style={{ backgroundColor: corFundoTela }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ── HEADER ── */}
        <View style={[styles.header, { backgroundColor: corFundoHeader }]}>
          {/* Avatar */}
          <Image source={imgAvatar} style={styles.avatar} />

          {/* Texto do header */}
          <Text
            style={[
              styles.headerText,
              { color: corFontePrimaria, fontSize: fonteHeader },
            ]}
          >
            {txtHeader}
          </Text>

          {/* Ícone de sino + badge */}
          <View style={styles.bellWrap}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={[styles.badge, { backgroundColor: corNotificacao }]}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </View>

        {/* ── SEÇÃO CATEGORIES ── */}
        <View style={[styles.secaoCategories, { backgroundColor: corFundoSecao }]}>
          <Text
            style={[
              styles.secaoTitulo,
              { color: corBranco, fontSize: fonteTitulo },
            ]}
          >
            {txtCategories}
          </Text>

          <View style={styles.iconsRow}>
            {/* Ícone Phone */}
            <View style={[styles.iconBox, { backgroundColor: corIconPhone }]}>
              <Text style={styles.iconEmoji}>📱</Text>
            </View>

            {/* Ícone Pet */}
            <View style={[styles.iconBox, { backgroundColor: corIconPet }]}>
              <Text style={styles.iconEmoji}>🐾</Text>
            </View>

            {/* Ícone Grid */}
            <View style={[styles.iconBox, { backgroundColor: corIconGrid }]}>
              <Text style={styles.iconEmoji}>📊</Text>
            </View>
          </View>
        </View>

        {/* ── SEÇÃO TECHNOLOGY ── */}
        <View style={styles.secaoTech}>
          <Text
            style={[
              styles.secaoTitulo,
              { color: corFontePrimaria, fontSize: fonteTitulo },
            ]}
          >
            {txtTechnology}
          </Text>

          {/* Card 1 */}
          <View style={[styles.card, { backgroundColor: corFundoCard }]}>
            <Image source={imgCard1} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.cardText,
                  { color: corFonteSecundaria, fontSize: fonteCardText },
                ]}
              >
                {txtCard1}
              </Text>
            </View>
          </View>
          <View style={[styles.barra, { backgroundColor: corBarraAmarela, width: '60%' }]} />

          {/* Card 2 */}
          <View style={[styles.card, { backgroundColor: corFundoCard }]}>
            <Image source={imgCard2} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.cardText,
                  { color: corFonteSecundaria, fontSize: fonteCardText },
                ]}
              >
                {txtCard2}
              </Text>
            </View>
          </View>
          <View style={[styles.barra, { backgroundColor: corBarraAzul, width: '45%' }]} />

          {/* Card 3 */}
          <View style={[styles.card, { backgroundColor: corFundoCard }]}>
            <Image source={imgCard3} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text
                style={[
                  styles.cardText,
                  { color: corFonteSecundaria, fontSize: fonteCardText },
                ]}
              >
                {txtCard3}
              </Text>
            </View>
          </View>
          <View style={[styles.barra, { backgroundColor: corBarraVerde, width: '35%' }]} />
        </View>
      </ScrollView>
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
  scroll: {
    paddingBottom: 32,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    gap: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  headerText: {
    flex: 1,
    lineHeight: 18,
  },
  bellWrap: {
    position: 'relative',
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    fontSize: 20,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },

  /* Seção Categories */
  secaoCategories: {
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  secaoTitulo: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  iconsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: {
    fontSize: 26,
  },

  /* Seção Technology */
  secaoTech: {
    paddingHorizontal: 16,
  },

  /* Card */
  card: {
    flexDirection: 'row',
    borderRadius: 14,
    marginBottom: 6,
    overflow: 'hidden',
    elevation: 1,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  cardText: {
    lineHeight: 17,
  },

  /* Barra de progresso */
  barra: {
    height: 6,
    borderRadius: 4,
    marginBottom: 14,
    marginTop: 2,
  },
});