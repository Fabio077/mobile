import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function Halloween({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.header, { backgroundColor: '#FFF200' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Halloween</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.topRow}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqPCy50t1bgBZApqj35e81knJ0kHLWLRx2w&s' }}
              style={styles.topImage}
              resizeMode="contain"
            />
            <View style={styles.topText}>
              <Text style={styles.sectionLabel}>HALLOWEEN</Text>
              <Text style={styles.bigTitle}>Curiosidades</Text>
            </View>
          </View>
          <View style={styles.cardDivider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Introdução:</Text>
            <Text style={styles.paragraph}>
              O significado de 'Halloween' está relacionado ao sentido da própria data em si. De acordo com Tupã Guerra, o nome teria vindo da expressão 'All Hallows Eve' que, em tradução direta, significa 'a véspera de todas as almas'. Isso porque a data antecede o Dia de Todos os Santos.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Origens</Text>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUpnTygvuftt7idkOkxHjwZQuWrnE52zFTQ&s' }}
              style={styles.bannerImage}
              resizeMode="contain"
            />
            <Text style={styles.paragraph}>
              Os historiadores apontam que a provável origem do Halloween tenha sido um festival praticado pelos celtas chamado Samhain. Esse festival era uma das comemorações mais importantes do calendário celta e era realizado como um marco do fim do verão.
            </Text>
          </View>

          <View style={styles.sectionRow}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJ5tQGM22XSppaXKjPNp_-cZs8jWVKX-VeQ&s' }}
              style={styles.detailImageSmall}
              resizeMode="cover"
            />
            <Text style={styles.sectionTitleSide}>Curiosidades:{"\n"}Bruxas</Text>
          </View>

          <View style={styles.sectionTextOnly}>
            <Text style={styles.paragraph}>
              Bruxas sempre aparecem como símbolo do Halloween. Pesquisas mostram que, antigamente, nos Estados Unidos, as bruxas eram representadas em histórias folclóricas como seres poderosos e misteriosos.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Luiz Fernando Corcini</Text>
          <Text style={styles.footerText}>2024</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#930000',
  },
  header: {
    height: 58,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  backText: {
    color: '#111',
    fontSize: 26,
  },
  headerTitle: {
    color: '#111',
    fontSize: 16,
  },
  content: {
    padding: 8,
    paddingBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#B7B7B7',
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 152,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  topImage: {
    width: 104,
    height: 104,
    marginRight: 18,
  },
  topText: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionLabel: {
    color: '#7A1A00',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 4,
  },
  bigTitle: {
    fontSize: 25,
    color: '#000',
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 14,
  },
  sectionTextOnly: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 17,
    color: '#A30000',
    marginBottom: 10,
  },
  paragraph: {
    color: '#111',
    fontSize: 13,
    lineHeight: 26,
    marginBottom: 12,
    textAlign: 'justify',
  },
  bannerImage: {
    width: 170,
    height: 42,
    marginBottom: 12,
  },
  sectionRow: {
    paddingHorizontal: 24,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailImageSmall: {
    width: 86,
    height: 86,
    marginRight: 16,
  },
  sectionTitleSide: {
    fontSize: 17,
    color: '#A30000',
    lineHeight: 30,
  },
  footer: {
    marginTop: -4,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#555',
    fontSize: 12,
  },
  cardDivider: {
    borderTopWidth: 1,
    borderTopColor: '#B7B7B7',
  },
});
