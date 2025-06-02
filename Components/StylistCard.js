import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For arrow icon

export default function StylistCard({ image, title, priceTag, label, brands }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.tagRow}>
          <View style={styles.priceTag}><Text style={styles.tagText}>{priceTag}</Text></View>
          <View style={styles.labelTag}><Text style={styles.tagText}>{label}</Text></View>
        </View>
        <View style={styles.brands}>
          {brands.map((brand, idx) => (
            <Text key={idx} style={styles.brandText}>{brand}{idx !== brands.length - 1 ? ' | ' : ''}</Text>
          ))}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#555" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    top:-140
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 12,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  priceTag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  labelTag: {
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  brands: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  brandText: {
    fontSize: 12,
    color: '#555',
  },
});
