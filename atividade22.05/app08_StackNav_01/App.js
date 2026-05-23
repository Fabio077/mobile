import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './scr/Telas/Principal';
import Carnaval from './scr/Telas/Carnaval';
import FestaJunina from './scr/Telas/FestaJunina';
import Halloween from './scr/Telas/Halloween';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Carnaval" component={Carnaval} />
        <Stack.Screen name="FestaJunina" component={FestaJunina} />
        <Stack.Screen name="Halloween" component={Halloween} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
