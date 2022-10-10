import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/loginScreen';
import RegisterScreen from '../Screens/registerScreen';
import ProfileScreen from '../Screens/profileScreen';

const Stack = createNativeStackNavigator();

function LoginNavigation({navigation}) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        {/* <Stack.Screen
          name="AuthBottomTab"
          component={AuthBottomTab}
          options={{
            headerRight: () => (
              <Button
                // onPress={() => navigation.navigate('RegisterScreen')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNavigation;
