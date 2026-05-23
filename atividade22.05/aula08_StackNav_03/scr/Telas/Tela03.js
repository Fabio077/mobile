import PlanetScreen from './PlanetScreen';

export default function Tela03({ navigation }) {
  return (
    <PlanetScreen
      navigation={navigation}
      title="Marte"
      imageUri="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
      description="Marte e conhecido como o planeta vermelho."
      facts={[
        'A coloracao avermelhada e causada por oxido de ferro.',
        'Marte possui o maior vulcao do Sistema Solar.',
        'Cientistas estudam a possibilidade de vida antiga no planeta.',
        'Missoes espaciais investigam Marte constantemente.',
      ]}
      backgroundColor="#4b2525"
    />
  );
}
