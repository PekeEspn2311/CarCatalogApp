import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const cars = [
  { id: '1', name: 'Carro 1' },
  { id: '2', name: 'Carro 2' },
  { id: '3', name: 'Carro 3' },
];

const CarCatalogScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  carItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default CarCatalogScreen;
