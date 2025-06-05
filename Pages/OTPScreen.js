// screens/OTPScreen.js
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import axiosInstance from '../axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OTPScreen({route, navigation}) {
  const [otp, setOtp] = useState('');
  const { phone } = 999999999;
const { email } = route.params;
  const verifyOtp = async() => {
    // if (otp === '1234') {
    //   Alert.alert('Success', 'OTP Verified!');
    //    navigation.navigate('LocationFetcher');
    //   // Navigate to Home or Dashboard
    // } else {
    //   Alert.alert('Error', 'Invalid OTP');
    // }
if(otp){
     try {
      const response = await axiosInstance.post('/loginnext', {
        email:email ,
        otp: otp,
      });
      console.log(response);
 await AsyncStorage.setItem('token', JSON.stringify(response.data.token));
         navigation.navigate('LocationFetcher');

    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      Alert.alert('Error', 'Invalid OTP');
    }
  }else{
Alert.alert('Error', 'fill OTP');
  }
  };

  return (
    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
            <ScrollView contentContainerStyle={styles.container}   keyboardShouldPersistTaps="handled" >
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Sent to {phone}</Text>
      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        maxLength={6}
      />
      <Button title="Verify OTP" onPress={verifyOtp} />
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  footerText: {
    textAlign: 'center',
    color: '#6200EE',
    marginTop: 16
  }
});

