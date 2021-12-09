import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './src/screens/splashScreen'
import { RegisterScreen } from './src/screens/register';
import { CaptureScreen } from './src/screens/capture';
import { SplashScreen2 } from './src/screens/splashScreen2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash" component={SplashScreen2} options ={{headerShown : false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options ={{headerShown : false}}/>
        <Stack.Screen name="Capture" component={CaptureScreen} options={{ title: 'Capture' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;