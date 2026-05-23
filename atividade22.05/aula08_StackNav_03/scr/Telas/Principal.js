import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation - parte 2</Text>
      <Text style={styles.subtitle}>SISTEMA SOLAR</Text>

      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg' }}
        style={styles.image}
      />

      <View style={styles.buttonGroup}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Tela01')}>
          <Text style={styles.buttonText}>VER PLANETAS</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101820',
    padding: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 24,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 32,
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1f8fff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
