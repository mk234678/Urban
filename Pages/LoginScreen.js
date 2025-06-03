// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Dummy OTP sending logic
    navigation.navigate('OTP', { phone });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Button title="Send OTP" onPress={handleLogin} />
       <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.footerText}>New user? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

