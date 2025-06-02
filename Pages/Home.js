import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  TextInput

} from 'react-native';

const services = [
  {
    title: "Women's Salon & Spa",
    image: require('../assets/makeup.png'),
    subServices: [
      { title: 'Hair Studio for Women', image: require('../assets/Hair.png') },
      { title: 'Spa for Women', image: require('../assets/spa.png') },
      { title: 'Makeup & Styling Studio', image: require('../assets/makeup.png') },
    ],
  },
   {
    title: "Man's Salon & Spa",
    image: require('../assets/salon.png'),
    subServices: [
      { title: 'Salon for Women', image: require('../assets/salon.png') },
      { title: 'Spa for Women', image: require('../assets/spa.png') },
    ],
  },
  // Add more services here...
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
const [searchQuery, setSearchQuery] = useState('');
  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const renderServiceCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.label}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSubService = ({ item }) => (
    <View style={styles.subCard}>
      <Image source={item.image} style={styles.subIcon} />
      <Text style={styles.subLabel}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <TextInput
  placeholder="Search..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  style={styles.searchInput}
/>
      <Text style={styles.header}>What are you looking for?</Text>
      <FlatList
        data={services}
        renderItem={renderServiceCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedService?.title}</Text>
            <FlatList
              data={selectedService?.subServices || []}
              renderItem={renderSubService}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
              contentContainerStyle={styles.subGrid}
            />
            <Pressable style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeBtnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    alignItems: 'center',
  },
  card: {
    width: 140,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
 modalOverlay: {
  flex: 1,
  backgroundColor: '#000000aa',
  justifyContent: 'flex-end', // 👈 push content to bottom
},
modalContent: {
  width: '100%',
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  maxHeight: '80%',
},

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subGrid: {
    alignItems: 'center',
  },
  subCard: {
    width: 120,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  subIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  subLabel: {
    fontSize: 11,
    textAlign: 'center',
  },
  closeBtn: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#ff4444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 10,
},

});
