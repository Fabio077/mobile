import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const avatarUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

const academicItems = [
  {
    title: 'Engenharia Eletrônica',
    school: 'UTFPR (Graduação)',
    date: '10/03/2000'
  },
  {
    title: 'Administração de TI',
    school: 'FAE Business School (Especialização)',
    date: '30/04/2005'
  },
  {
    title: 'Educação e Novas\nTecnologias',
    school: 'UNINTER (Mestrado)',
    date: '11/06/2016'
  }
];

export default function PortfolioScreen() {
  return (
    <ScrollView
      style={styles.lightScreen}
      contentContainerStyle={styles.portfolioContent}
      showsVerticalScrollIndicator
    >
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.portfolioTitle}>Meu Portfólio</Text>

      <Text style={styles.sectionTitle}>Acadêmicos</Text>

      {academicItems.map((item) => (
        <View key={item.title} style={styles.academicCard}>
          <Text style={styles.academicTitle}>{item.title}</Text>
          <Text style={styles.academicText}>- {item.school}</Text>
          <Text style={styles.academicText}>- {item.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lightScreen: {
    flex: 1,
    backgroundColor: '#eaf8ff'
  },
  portfolioContent: {
    alignItems: 'center',
    paddingBottom: 18,
    paddingHorizontal: 20,
    paddingTop: 32
  },
  avatar: {
    width: 105,
    height: 105,
    borderRadius: 53,
    marginBottom: 20
  },
  portfolioTitle: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 45,
    textAlign: 'center'
  },
  sectionTitle: {
    alignSelf: 'stretch',
    color: '#213f8a',
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 10
  },
  academicCard: {
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 13,
    paddingHorizontal: 17,
    paddingVertical: 17
  },
  academicTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 28,
    marginBottom: 5
  },
  academicText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 27
  }
});
