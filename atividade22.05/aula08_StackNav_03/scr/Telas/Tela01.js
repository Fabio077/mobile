import PlanetScreen from './PlanetScreen';

export default function Tela01({ navigation }) {
  return (
    <PlanetScreen
      navigation={navigation}
      title="Mercurio"
      imageUri="https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
      description="Mercurio e o planeta mais proximo do Sol."
      facts={[
        'E o menor planeta do Sistema Solar.',
        'Um ano em Mercurio dura apenas 88 dias terrestres.',
        'Durante o dia, a temperatura pode ultrapassar 400°C.',
        'A noite, a temperatura pode chegar a -180°C.',
      ]}
      backgroundColor="#1f1f1f"
      nextScreen="Tela02"
    />
  );
}
