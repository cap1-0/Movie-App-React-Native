import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({navigation}) {
  const [userEmail, setUserEmail] = useState('userEmail');
  const [userPassword, setUserPassword] = useState('userPassword');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getuserPassword();
    getuserEmail();
    getuser();
  }, []);
  const getuser = async () => {
    try {
      const userdata = await AsyncStorage.getItem('user');
      if (userdata !== null) {
        // userEmail1=userdata;
        setUser(JSON.parse(userdata));
        console.log('hello user',user);
      }
    } catch (e) {
      // error reading value
    }
  };
  console.log("user123",user);
//  let username=user.email
//  let password1=user.password

//  console.log("username",username+'password1',password1);

  const getuserEmail = async () => {
    try {
      const userdata = await AsyncStorage.getItem('userEmail');
      if (userdata !== null) {
        // userEmail1=userdata;
        setUserEmail(JSON.parse(userdata));
        // console.log(userEmail1);
      }
    } catch (e) {
      // error reading value
    }
  };
  const getuserPassword = async () => {
    try {
      const userdata = await AsyncStorage.getItem('userPassword');
      if (userdata !== null) {
        setUserPassword(JSON.parse(userdata));
      }
    } catch (e) {
      // error reading value
    }
  };

  const storeLogIn = async () => {
    try {
      let login = true;
      const jsonValue = JSON.stringify(login);
      await AsyncStorage.setItem('loginInfo', jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const onSucces = () => {
    getuserPassword();
    getuserEmail();
    getuser();

    if (userEmail === email && userPassword === password) {
      navigation.navigate('ProfileScreen');
      storeLogIn();
    } else if (userEmail !== email) {
      alert('email not found please sign up');
    } else {
      alert('wrong password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{uri: 'https://lorempixel.com/900/1400/nightlife/2/'}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail(email)}
        />
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setPassword(password)}
        />
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}
        />
      </View>

      <TouchableOpacity
        style={styles.btnForgotPassword}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.btnText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => onSucces()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Button
        title="Go to Details"
        onPress={() => {
          // console.log(user);
          getuserPassword();
        }}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    flex: 1,
    color: '#8b9cb5',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },

  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
