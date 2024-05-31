import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const cars = [
  { id: '1', brand: 'Toyota', model: 'Corolla', year: 2018, mileage: 35000, price: '$15,000' },
  { id: '2', brand: 'Honda', model: 'Civic', year: 2020, mileage: 12000, price: '$20,000' },
  { id: '3', brand: 'Ford', model: 'Focus', year: 2017, mileage: 45000, price: '$12,500' },
];

const CarsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Text style={styles.name}>{item.brand} {item.model}</Text>
            <Text style={styles.details}>Año: {item.year}</Text>
            <Text style={styles.details}>Kilometraje: {item.mileage} km</Text>
            <Text style={styles.details}>Precio: {item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddCar')}>
        <Text style={styles.buttonText}>Agregar Carro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  carItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CarsScreen;
