import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setemail] = useState();
  const [mobile, setmobile] = useState();

  useEffect(() => {
    getuserEmail();
    getusername();
    getmobile();
  }, []);
  const getuserEmail = async () => {
    try {
      const userdata = await AsyncStorage.getItem('userEmail');
      if (userdata !== null) {
        // userEmail1=userdata;
        setemail(JSON.parse(userdata));
        // console.log(userEmail1);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getusername = async () => {
    try {
      const userdata = await AsyncStorage.getItem('username');
      if (userdata !== null) {
        // userEmail1=userdata;
        setUsername(JSON.parse(userdata));
        console.log('hello user', user);
      }
    } catch (e) {
      // error reading value
    }
  };
  const getmobile = async () => {
    try {
      const userdata = await AsyncStorage.getItem('mobile');
      if (userdata !== null) {
        // userEmail1=userdata;
        setmobile(JSON.parse(userdata));
        console.log('hello user', user);
      }
    } catch (e) {
      // error reading value
    }
  };
  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      // navigation.navigate('LoginNavigation')

      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar2.png',
              }}
            />
            <Text style={styles.name}>{username}</Text>
          </View>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>mobile number</Text>
          <Text style={styles.count}>{mobile}</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>email</Text>
          <Text style={styles.count}>{email}</Text>
        </View>
        <View style={{marginTop: 100}}>
          <Button
            title="log out"
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
      </View>
    </>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00CED1',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    // alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#00000',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00CED1',
  },
  description: {
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
