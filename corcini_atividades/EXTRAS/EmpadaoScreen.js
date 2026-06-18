// EmpadaoScreen copied
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmpadaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empadão de Frango</Text>
      <Text style={styles.text}>Receita e modo de preparo...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700' },
  text: { marginTop: 10 }
});
