import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './scr/Telas/Principal';
import Tela01 from './scr/Telas/Tela01';
import Tela02 from './scr/Telas/Tela02';
import Tela03 from './scr/Telas/Tela03';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Tela01" component={Tela01} />
        <Stack.Screen name="Tela02" component={Tela02} />
        <Stack.Screen name="Tela03" component={Tela03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
