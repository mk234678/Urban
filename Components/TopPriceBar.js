import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function TopPriceBar({amount,quantity}) {
  const [items, setItems] = useState([
    {
      id: "1",
      title: "Complete waxing ...",
      discountedPrice: amount,
      originalPrice: 1600*quantity,
      services: ["Upper lip x1", "RICA gold roll-on x1", "RICA gold roll-on x1"],
      quantity: quantity,
    },
    // {
    //   id: "2",
    //   title: "Complete waxing ...",
    //   discountedPrice: 1812,
    //   originalPrice: 1907,
    //   services: ["Upper lip x1", "RICA gold roll-on x1", "RICA gold roll-on x1"],
    //   quantity: 1,
    // },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
            <Text style={styles.counterButton}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
            <Text style={styles.counterButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.discountedPrice}>₹{item.discountedPrice}</Text>
        <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
      </View>

      {item.services.map((service, index) => (
        <View key={index} style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.serviceText}>{service}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
  <View style={styles.listContainer}>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderCard}
      contentContainerStyle={{ paddingBottom: 100 }} // Space for bottom bar
    />
  </View>

  <View style={styles.topBar}>
    <Text style={styles.label}>Amount to pay</Text>
    <Text style={styles.amount}>₹{totalAmount}</Text>
    {/* <Text style={styles.breakup}>View breakup</Text> */}
  </View>
</View>

  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  // paddingTop:110
},
listContainer: {
  flex: 1,
},
topBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  padding: 16,
  borderTopWidth: 1,
  borderTopColor: '#eee',
  elevation: 10,
},
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    margin: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  counter: {
    flexDirection: "row",
    backgroundColor: "#F5F0FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  counterButton: {
    fontSize: 20,
    color: "#6A0DAD",
    paddingHorizontal: 6,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000",
    marginRight: 8,
  },
  serviceText: {
    fontSize: 14,
  },

  label: {
    fontSize: 16,
    color: "#666",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  breakup: {
    fontSize: 14,
    color: "#6C63FF",
  },
});
