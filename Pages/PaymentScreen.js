import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import TopPriceBar from '../Components/TopPriceBar';

export default function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handlePayment = () => {
    Alert.alert('Payment Selected', `You selected ${paymentMethod === 'cash' ? 'Cash on Delivery' : 'UPI Payment'}`);
  };

  return (
    <View>
        <TopPriceBar/>
    
    <View style={styles.container}>
    
      <Text style={styles.header}>Select Payment Method</Text>

      <View style={styles.optionContainer}>
        <RadioButton
          value="cash"
          status={paymentMethod === 'cash' ? 'checked' : 'unchecked'}
          onPress={() => setPaymentMethod('cash')}
        />
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </View>

      <View style={styles.optionContainer}>
        <RadioButton
          value="upi"
          status={paymentMethod === 'upi' ? 'checked' : 'unchecked'}
          onPress={() => setPaymentMethod('upi')}
        />
        <Text style={styles.optionText}>UPI Payment</Text>
      </View>

      {paymentMethod === 'upi' && (
        <View style={styles.upiBox}>
          <Text style={styles.upiInfo}>You’ll be redirected to your UPI app to complete the payment.</Text>
        </View>
      )}

      <TouchableOpacity style={styles.processButton} onPress={handlePayment}>
        <Text style={styles.processButtonText}>Process Payment</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop:90
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  upiBox: {
    backgroundColor: '#F2F1FF',
    padding: 16,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ee',
  },
  upiInfo: {
    fontSize: 14,
    color: '#6200ee',
  },
  processButton: {
    marginTop: 40,
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  processButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
