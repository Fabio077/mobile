import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PlanetScreen({
  navigation,
  title,
  imageUri,
  description,
  facts,
  backgroundColor,
  nextScreen,
}) {
  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>

      <Image source={{ uri: imageUri }} style={styles.image} />

      <Text style={styles.description}>{description}</Text>

      {facts.map((fact) => (
        <Text key={fact} style={styles.fact}>
          • {fact}
        </Text>
      ))}

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </Pressable>

        {nextScreen ? (
          <Pressable style={styles.button} onPress={() => navigation.navigate(nextScreen)}>
            <Text style={styles.buttonText}>PROXIMO PLANETA</Text>
          </Pressable>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 40,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 22,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 6,
    borderColor: '#000000',
    marginBottom: 26,
  },
  description: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 18,
    alignSelf: 'flex-start',
  },
  fact: {
    color: '#ffffff',
    fontSize: 17,
    lineHeight: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 48,
  },
  button: {
    backgroundColor: '#1f8fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
});
