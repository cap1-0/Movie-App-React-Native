import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './homeStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigation from './loginNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutNavigation from './LogoutNavigation';

const Tab = createBottomTabNavigator();
export function BottomTab() {
  const [login, setlogin] = useState(false);
  const [username, setUsername] = useState('');


  useEffect(() => {
    getloginInfo();
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
  const getloginInfo = async () => {
    try {
      const userdata = await AsyncStorage.getItem('loginInfo');
      if (userdata !== null) {
        setlogin(JSON.parse(userdata));
        console.log('hello  login', userdata);
        console.log('hello login123', login);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            headerShown: false      
          }}
        />
        {login == true ? (
          <Tab.Screen
            name="ProfileScreen"
            component={LogoutNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Tab.Screen
            name="LoginScreen"
            component={LoginNavigation}
            options={{headerShown: false}}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
