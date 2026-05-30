import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.homeScreen}>
      <StatusBar style="dark" />

      <View style={styles.homeCard}>
        <View style={styles.homeCenter}>
          <Text style={styles.homeTitle}>Página Home</Text>
          <Text style={styles.homeWelcome}>Bem-vindo(a)</Text>
          <Text style={styles.componentLabel}>COMPONENTE</Text>
          <Text style={styles.navigationText}>Tab Navigation</Text>
        </View>

        <View style={styles.footerPill}>
          <Text style={styles.footerText}>Luiz Corcini • dd/mm/yyyy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 10
  },
  homeCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#dfe5ee',
    borderRadius: 22,
    paddingBottom: 10,
    paddingHorizontal: 18,
    paddingTop: 215
  },
  homeCenter: {
    alignItems: 'center',
    width: '100%'
  },
  homeTitle: {
    color: '#0c1c34',
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 25,
    textAlign: 'center'
  },
  homeWelcome: {
    color: '#0c1c34',
    fontSize: 18,
    marginBottom: 38,
    textAlign: 'center'
  },
  componentLabel: {
    color: '#18314f',
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center'
  },
  navigationText: {
    color: '#235df6',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center'
  },
  footerPill: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#1b2940',
    borderRadius: 15,
    justifyContent: 'center',
    minHeight: 40
  },
  footerText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center'
  }
});
