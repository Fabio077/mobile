import PlanetScreen from './PlanetScreen';

export default function Tela02({ navigation }) {
  return (
    <PlanetScreen
      navigation={navigation}
      title="Venus"
      imageUri="https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
      description="Venus e o planeta mais quente do Sistema Solar."
      facts={[
        'Venus possui uma atmosfera extremamente densa.',
        'Sua temperatura media e superior a 460°C.',
        'O planeta gira no sentido contrario da maioria dos planetas.',
        'E conhecido como a estrela dalva.',
      ]}
      backgroundColor="#3a231c"
      nextScreen="Tela03"
    />
  );
}
