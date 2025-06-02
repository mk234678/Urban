import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VideoPlay from '../Components/VideoPlay';

export default function PackageCard() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 0) setQuantity(prev => prev - 1);
  };

  return (
    <View>
    <VideoPlay/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Packages</Text>
 
      <View style={styles.card}>
        <Text style={styles.packageTag}>📦 PACKAGE</Text>
        <Text style={styles.packageTitle}>Complete waxing (tin)</Text>
        <Text style={styles.rating}>⭐ 4.91 (463K reviews)</Text>
        <Text style={styles.price}>
          ₹1,600 <Text style={styles.oldPrice}>₹1,687</Text> • 1 hr 25 min
        </Text>

        <View style={styles.description}>
          <Text style={styles.bullet}><Text style={styles.bold}>Waxing:</Text> Full arms (including underarms)</Text>
          <Text style={styles.bullet}><Text style={styles.bold}>Facial hair removal:</Text> Upper lip - Threading</Text>
        </View>

        {/* Add / Quantity Selector */}
        {quantity === 0 ? (
          <TouchableOpacity style={styles.addBtn} onPress={increase}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={decrease}>
              <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity onPress={increase}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
             
          </View>
        )}

        {/* <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Edit your package</Text>
        </TouchableOpacity> */}
      </View>

      {/* Show Next button if quantity > 0 */}
      {quantity > 0 && (
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 16,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  packageTag: {
    color: '#00695c',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  rating: {
    color: '#666',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  description: {
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  addBtn: {
    borderWidth: 1,
    borderColor: '#9c27b0',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 30,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  addBtnText: {
    color: '#9c27b0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtyContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3e8fd',
    borderRadius: 12,
    padding: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
  },
  qtyBtn: {
    fontSize: 20,
    color: '#7b1fa2',
    paddingHorizontal: 10,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7b1fa2',
  },
  editBtn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    alignSelf: 'flex-start',
  },
  editBtnText: {
    fontWeight: 'bold',
  },
  nextBtn: {
    marginTop: 30,
    backgroundColor: '#9c27b0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  nextBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
