import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login/Login';
import DoorControl from './Screen/DoorControl/DoorControl';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="DoorControl" component={DoorControl} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App