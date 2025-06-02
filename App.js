import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Pages/Home"
import StylistCard from './Components/StylistCard';
import AllDetails from './Pages/AllDetails';
import PackageCard from './Pages/PackageCard';
import RegisterScreen from './Pages/RegisterScreen';
import LoginScreen from './Pages/LoginScreen';
import OTPScreen from './Pages/OTPScreen';
import PaymentScreen from './Pages/PaymentScreen';
import LocationFetcher from './Pages/LocationFetcher';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Home/> */}
{/* <AllDetails/> */}
{/* <PackageCard/> */}
{/* <RegisterScreen/>
<LoginScreen/>
<OTPScreen/> */}
{/* <PaymentScreen/> */}
<LocationFetcher/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY:"auto"
  },
});
