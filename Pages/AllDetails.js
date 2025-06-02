import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

import StylistCard from '../Components/StylistCard';
export default function AllDetails() {
  return (
    <>
    <Image source={require('../assets/topimage.png')} style={{ width:300,height:100 ,objectFit:"cover",top:9}} />
    <View style={styles.container}>
     {/* <Home/> */}

     <StylistCard
  image={require('../assets/girl.png')}
  title="Luxe"
  priceTag="₹₹₹"
  label="LUXURY"
  brands={['AINHOA', 'CASMARA', 'CIRÉPIL']}
/>

<StylistCard
  image={require('../assets/girl2.png')}
  title="Prime"
  priceTag="₹₹"
  label="PREMIUM"
  brands={['ELYSIAN', 'RICA', 'INVEDA']}
/>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top:10
  },
});
