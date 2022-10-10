
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [usermobile_number, setUsermobile_number] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const emailInputRef = createRef();
  const mobile_numberInputRef = createRef();
  const confirmPassInputRef = createRef();
  const passwordInputRef = createRef();
  // var dataToSend = {
  //   name: userName,
  //   email: userEmail,
  //   mobile: usermobile_number,
  //   // address: confirmPass,
  //   password: userPassword,
  // };
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(userName);
      await AsyncStorage.setItem('username', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const storeName = async () => {
    try {
      const jsonValue = JSON.stringify(userEmail);
      await AsyncStorage.setItem('userEmail', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const storeuserEmail = async () => {
    try {
      const jsonValue = JSON.stringify(userEmail);
      await AsyncStorage.setItem('userEmail', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const storePass = async () => {
    try {
      const jsonValue = JSON.stringify(userPassword);
      await AsyncStorage.setItem('userPassword', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const storemobile = async () => {
    try {
      const jsonValue = JSON.stringify(usermobile_number);
      await AsyncStorage.setItem('mobile', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!usermobile_number) {
      alert('Please fill mobile number');
      return;
    }
    if (!confirmPass) {
      alert('Please confirmPass');
      return;
    }
    if (!userPassword) {
      alert('Please confirmPass');
      return;
    }
    if (confirmPass != userPassword) {
      alert('password not matches');
      return;
    }
    storeData();
    storeName();
    storePass();
    storeuserEmail();
    storemobile();
    setIsRegistraionSuccess(true);
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('LoginScreen');
            setIsRegistraionSuccess(false);
          }}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#0000'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}></View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter UserName"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={mobile_number =>
                setUsermobile_number(mobile_number)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter mobile number"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={mobile_numberInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                confirmPassInputRef.current &&
                confirmPassInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                mobile_numberInputRef.current &&
                mobile_numberInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={confirmPass => setconfirmPass(confirmPass)}
              underlineColorAndroid="#f000"
              placeholder="confirm Password"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={confirmPassInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>

          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {
              handleSubmitButton();
            }}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#8b9cb5',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
