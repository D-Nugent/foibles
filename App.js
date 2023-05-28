
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import TestScreen from './screens/TestScreen/TestScreen';
import SignUp from './screens/SignUp/SignUp';
import { Platform } from 'react-native';
import Tracking from './screens/Tracking/Tracking';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            animation: Platform.OS === 'ios' ? 'flip':'slide_from_left',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            animation: Platform.OS === 'ios' ? 'flip':'slide_from_right',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Tracking'
          component={Tracking}
          options={{
            animation: 'slide_from_bottom',
            headerShown: false
          }}
        />
        <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}