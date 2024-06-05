import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CarsScreen from './src/screens/CarsScreen';
import WorkshopsScreen from './src/screens/WorkshopsScreen';
import PartsScreen from './src/screens/PartsScreen';
import AddCarScreen from './src/screens/AddCarScreen';
import AddWorkshopScreen from './src/screens/AddWorkshopScreen';
import AddPartScreen from './src/screens/AddPartScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false, // Ocultar el encabezado
};

const CarsStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Cars" component={CarsScreen} />
    <Stack.Screen name="AddCar" component={AddCarScreen} />
  </Stack.Navigator>
);

const WorkshopsStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Workshops" component={WorkshopsScreen} />
    <Stack.Screen name="AddWorkshop" component={AddWorkshopScreen} />
  </Stack.Navigator>
);

const PartsStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Parts" component={PartsScreen} />
    <Stack.Screen name="AddPart" component={AddPartScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: () => null, // Elimina los iconos
        }}
      >
        <Tab.Screen name="Cars" component={CarsStack} />
        <Tab.Screen name="Workshops" component={WorkshopsStack} />
        <Tab.Screen name="Parts" component={PartsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
