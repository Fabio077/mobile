import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Principal({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem Vindo(a)</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.smallTitle}>Tela Principal</Text>
          <Text style={styles.title}>Stack Navigation</Text>
          <Text style={styles.small}>Dsv Mobile</Text>
        </View>

        <Image
          source={{ uri: 'https://img.icons8.com/?size=512&id=85931&format=png' }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Curiosidades</Text>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Carnaval')}>
            <Text style={styles.buttonText}>Carnaval</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FestaJunina')}>
            <Text style={styles.buttonText}>Festa Junina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Halloween')}>
            <Text style={styles.buttonText}>Halloween</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Fabio Rodrigues</Text>
          <Text style={styles.footerText}>2026</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 18,
    backgroundColor: '#000',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 10,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardHeader: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 12,
    marginBottom: 12,
  },
  smallTitle: {
    color: '#000',
    fontSize: 15,
    marginBottom: 4,
  },
  title: {
    fontSize: 31,
    fontWeight: '400',
    color: '#000',
    marginBottom: 6,
  },
  small: {
    fontSize: 13,
    color: '#000',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 6,
    marginBottom: 18,
  },
  divider: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E9E9E9',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 12,
    marginBottom: 14,
    color: '#000',
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 132,
    height: 30,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#B00000',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  footer: {
    width: '100%',
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#E9E9E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    paddingVertical: 14,
  },
  footerText: {
    color: '#000',
    fontSize: 12,
  },
});
