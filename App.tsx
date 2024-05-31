import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import CarsScreen from './src/screens/CarsScreen';
import AddCarScreen from './src/screens/AddCarScreen';
import WorkshopsScreen from './src/screens/WorkshopsScreen';
import AddWorkshopScreen from './src/screens/AddWorkshopScreen';
import PartsScreen from './src/screens/PartsScreen';
import AddPartScreen from './src/screens/AddPartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CarStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cars" component={CarsScreen} />
    <Stack.Screen name="AddCar" component={AddCarScreen} />
  </Stack.Navigator>
);

const WorkshopStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Workshops" component={WorkshopsScreen} />
    <Stack.Screen name="AddWorkshop" component={AddWorkshopScreen} />
  </Stack.Navigator>
);

const PartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Parts" component={PartsScreen} />
    <Stack.Screen name="AddPart" component={AddPartScreen} />
  </Stack.Navigator>
);

const CarCatalogTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Cars"
      component={CarStack}
      options={{ tabBarLabel: 'Carros' }}
    />
    <Tab.Screen
      name="Workshops"
      component={WorkshopStack}
      options={{ tabBarLabel: 'Talleres' }}
    />
    <Tab.Screen
      name="Parts"
      component={PartStack}
      options={{ tabBarLabel: 'Partes' }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CarCatalog" component={CarCatalogTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
