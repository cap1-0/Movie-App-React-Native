import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/loginScreen';
import ProfileScreen from '../Screens/profileScreen';

const Stack = createNativeStackNavigator();

function LogoutNavigation({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LogoutNavigation;
