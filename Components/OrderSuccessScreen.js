import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { MaterialIcons } from '@expo/vector-icons';

export default function OrderSuccessScreen({navigation}) {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Delivery')
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', delay: 300 }}
        style={styles.iconWrapper}
      >
        <MaterialIcons name="check-circle" size={100} color="green" />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 700 }}
      >
        <Text style={styles.title}>Order Placed Successfully!</Text>
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 1000 }}
      >
        <Text style={styles.subtitle}>
          Thank you for your purchase. We'll deliver your items shortly.
        </Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconWrapper: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
});
