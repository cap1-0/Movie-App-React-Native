import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/homeScreen';
import LoginScreen from '../Screens/loginScreen';
import RegisterScreen from '../Screens/registerScreen';
import DetailsScreen from '../Screens/detailScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function HomeNavigation() {
  const [username, setUsername] = useState('');


  useEffect(() => {
    getusername();
  }, []);
  const getusername = async () => {
    try {
      const userdata = await AsyncStorage.getItem('username');
      if (userdata !== null) {
        setUsername(JSON.parse(userdata));
        console.log('hello user',user);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'hii '+username ? 'hii '+ username : 'hii',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },        
          }}
        />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;
