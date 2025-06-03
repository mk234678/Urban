import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Pages/Home"
import AllDetails from './Pages/AllDetails';
import PackageCard from './Pages/PackageCard';
import RegisterScreen from './Pages/RegisterScreen';
import LoginScreen from './Pages/LoginScreen';
import OTPScreen from './Pages/OTPScreen';
import PaymentScreen from './Pages/PaymentScreen';
import LocationFetcher from './Pages/LocationFetcher';
import DeliveryTrackingScreen from './Pages/DeliveryTrackingScreen';
import OrderSuccessScreen from './Components/OrderSuccessScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

 <NavigationContainer>
    
      <Stack.Navigator initialRouteName="LocationFetcher">
        <Stack.Screen name="LocationFetcher" component={LocationFetcher} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="OTP" component={OTPScreen}/>
        <Stack.Screen name="payment" component={PaymentScreen} options={{ title: 'Payment' }}/>
        <Stack.Screen name="OrderSuccessScreen" component={OrderSuccessScreen} options={{ title: 'Order' }}/>
        <Stack.Screen name="PackageCard" component={PackageCard} options={{ title: 'Package' }}/>
        <Stack.Screen name="AllDetails" component={AllDetails} options={{ title: 'Details' }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Delivery" component={DeliveryTrackingScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
      
    </NavigationContainer>

  
  );
}
 // <View style={styles.container}>
    //  <Home/>
{/* <AllDetails/> */}
{/* <PackageCard/> */}
{/* <RegisterScreen/>
<LoginScreen/>
<OTPScreen/> */}
{/* <PaymentScreen/> */}
{/* <LocationFetcher/> */}
{/* <DeliveryTrackingScreen/> */}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflowY:"auto"
  },
});
