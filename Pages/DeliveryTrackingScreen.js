import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Linking } from 'react-native';
export default function DeliveryTrackingScreen({navigation}) {
  const phoneNumber = '9876543210';

  const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedHours = ((hours + 11) % 12 + 1).toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('PackageCard')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Instamart order</Text>
          <Text style={styles.headerSub}> {currentTime} • 6 items</Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </View>

      {/* Map section (mocked as image) */}
      <Image
        source={require('../assets/girl2.png')} // use any route or map image here
        style={styles.map}
        resizeMode="cover"
      />

      {/* Delivery Info */}
      <View style={styles.deliveryBox}>
        <Text style={styles.deliveryStatus}>Out for delivery</Text>
        <Text style={styles.deliveryDesc}>
          Prasenjit Pal is on the way to deliver your order
        </Text>

        <View style={styles.deliveryBottom}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>12</Text>
            <Text style={styles.timeLabel}>mins</Text>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.callButton}  onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
              <MaterialIcons name="call" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Delivery Note */}
      <View style={styles.noteBox}>
        <Image
          source={require('../assets/girl.png')} // you can use a vector or emoji here
          style={styles.noteIcon}
        />
        <Text style={styles.noteText}>
          Delivery partner will drive safely to deliver your order superfast!
        </Text>
      </View>

      {/* Promo Ad */}
      <View style={styles.adBox}>
        <Text style={styles.adTitle}>Unlimited lounge access</Text>
        <Text style={styles.adSubtitle}>Truly unlimited. 365 times a year.</Text>
        <TouchableOpacity style={styles.adButton}>
          <Text style={styles.adButtonText}>Apply for free card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingTop: 40, paddingHorizontal: 16, paddingBottom: 12,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 16, fontWeight: 'bold' },
  headerSub: { fontSize: 12, color: 'gray' },

  map: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },

  deliveryBox: {
    backgroundColor: '#f6f6f6',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  deliveryStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  deliveryDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  deliveryBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeBox: {
    backgroundColor: '#0a0',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  timeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  timeLabel: { color: '#fff', fontSize: 12 },

  actionButtons: { flexDirection: 'row' },
  callButton: {
    backgroundColor: '#f60',
    padding: 10,
    borderRadius: 50,
    marginLeft: 8,
  },

  noteBox: {
    flexDirection: 'row',
    backgroundColor: '#fef6f3',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  noteIcon: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  noteText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },

  adBox: {
    backgroundColor: '#c4f0e3',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  adTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  adSubtitle: {
    fontSize: 13,
    marginVertical: 4,
    color: '#555',
  },
  adButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  adButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
