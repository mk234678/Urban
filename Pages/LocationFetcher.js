import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Animated, Easing,Image } from 'react-native';
import * as Location from 'expo-location';

export default function App({ navigation }) {
  const [location, setLocation] = useState(null);
  const [fetching, setFetching] = useState(true);

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (fetching) {
      startPulse();
    } else {
      pulseAnim.stopAnimation();
      pulseAnim.setValue(1);
    }
  }, [fetching]);

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.4,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  };
 const [locationDetails, setLocationDetails] = useState(null);
  const fetchLocation = async () => {
    setFetching(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        setFetching(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
        let [address] = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude
      });

      // setLocationDetails(address);
      setLocation(loc);
      navigation.navigate('Home', { "address":address.formattedAddress });
    } catch (err) {
      alert('Failed to get location');
    } finally {
      setFetching(false);
    }
  };

  return (
    <View style={styles.container}>
     <Image source={require('../assets/location.png')} style={{ width:40,height:40,marginBottom:20 }} />
       {fetching && (<Text style={styles.title}>Location fetching....</Text>)}
      {fetching && (
        <Animated.View style={[styles.dot, { transform: [{ scale: pulseAnim }] }]} />
      )}

      {/* <Button title="Get Location Again" onPress={fetchLocation} /> */}

      {location && (
        <Text style={styles.location}>
          Lat: {location.coords.latitude.toFixed(4)}, Lon: {location.coords.longitude.toFixed(4)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 30
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3498db',
    marginBottom: 20,
  },
  location: {
    marginTop: 20,
    fontSize: 16
  }
});
