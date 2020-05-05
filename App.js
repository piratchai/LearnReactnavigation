import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import WelcomeScreen from './Screens/WelcomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerMode:'none', headerShown: false}} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerMode:'none', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;