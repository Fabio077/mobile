import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.contactScreen} contentContainerStyle={styles.contactContent}>
      <Text style={styles.contactTitle}>Entre em Contato</Text>

      <View style={styles.contactCard}>
        <Text style={styles.contactCardTitle}>Informações de Contato</Text>
        <Text style={styles.contactText}>Celular: (41) 99999-9999</Text>
        <Text style={styles.contactText}>Email: professor@email.com</Text>
        <Text style={styles.contactText}>LinkedIn: linkedin.com/in/professor</Text>
        <Text style={styles.contactText}>Instagram: @professor.dev</Text>
        <Text style={styles.contactText}>YouTube: youtube.com/@canaldev</Text>
        <Text style={styles.contactText}>Curitiba - PR</Text>
      </View>

      <Text style={styles.messageTitle}>Enviar Mensagem</Text>
      <TextInput style={styles.nameInput} placeholder="Digite seu nome" placeholderTextColor="#111111" />
      <TextInput
        multiline
        style={styles.messageInput}
        placeholder="Digite sua mensagem"
        placeholderTextColor="#111111"
        textAlignVertical="top"
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
    backgroundColor: '#eefaff'
  },
  contactContent: {
    paddingBottom: 28,
    paddingHorizontal: 19,
    paddingTop: 47
  },
  contactTitle: {
    color: '#000000',
    fontSize: 29,
    fontWeight: '900',
    marginBottom: 35,
    textAlign: 'center'
  },
  contactCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 29,
    paddingHorizontal: 17,
    paddingVertical: 20
  },
  contactCardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 18
  },
  contactText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 28
  },
  messageTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 25,
    textAlign: 'center'
  },
  nameInput: {
    backgroundColor: '#ffffff',
    borderColor: '#c8c8c8',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 46,
    marginBottom: 18,
    paddingHorizontal: 12
  },
  messageInput: {
    backgroundColor: '#ffffff',
    borderColor: '#c8c8c8',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 118,
    marginBottom: 26,
    paddingHorizontal: 12,
    paddingTop: 12
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#2f63e6',
    borderRadius: 6,
    height: 48,
    justifyContent: 'center'
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16
  }
});
