import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import axiosInstance from '../axiosInstance';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setusername] = useState('');

const [loading, setLoading] = useState(false);
 const handleRegister = async () => {
    if (name && phone && username) {
      setLoading(true); // Start loading

      try {
        const response = await axios.post(
          'https://urban-server-smoky.vercel.app/register',
          {
            email: name,
            password: phone,
            username: username,
          }
        );

        console.log('Registration Success:', response.data);
        navigation.navigate('OTP', { email: name });

      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            Alert.alert('Error', 'User already exists. Try logging in.');
          } else {
            Alert.alert('Error', error.response.data?.message || 'Registration failed!');
          }
        } else {
          Alert.alert('Network Error', error.message);
        }
      } finally {
        setLoading(false); // Stop loading
      }

    } else {
      Alert.alert('Error', 'Fill all fields');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}   keyboardShouldPersistTaps="handled" >
          <Text style={styles.title}>Register</Text>
          <TextInput
            placeholder="Name"
            value={username}
            onChangeText={setusername}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={name}
            onChangeText={setName}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, loading && { backgroundColor: '#aaa' }]}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
});
