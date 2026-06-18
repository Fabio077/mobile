// Copied App.js (main) into App08_StackNav_03
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import ContactScreen from '../../src/screens/ContactScreen';
import HomeScreen from '../../src/screens/HomeScreen';
import PortfolioScreen from '../../src/screens/PortfolioScreen';

const Tab = createBottomTabNavigator();

function TabIcon({ name, color }) {
  return <Ionicons name={name} size={22} color={color} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: styles.header,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitle,
          tabBarActiveTintColor: '#1b82ff',
          tabBarInactiveTintColor: '#888888',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabIcon name="home" color={color} />
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            title: 'Portfolio',
            tabBarLabel: 'Portfolio',
            tabBarIcon: ({ color }) => <TabIcon name="book" color={color} />
          }}
        />
        <Tab.Screen
          name="Contato"
          component={ContactScreen}
          options={{
            title: 'Contato',
            tabBarIcon: ({ color }) => <TabIcon name="call" color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    elevation: 0,
    height: 56,
    shadowOpacity: 0
  },
  headerTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400'
  },
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopColor: '#d6d6d6',
    height: 43,
    paddingBottom: 2,
    paddingTop: 1
  },
  tabLabel: {
    fontSize: 9
  }
});
