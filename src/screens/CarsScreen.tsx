import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const CarsScreen = ({ navigation }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const carsData = await AsyncStorage.getItem('cars');
        if (carsData !== null) {
          setCars(JSON.parse(carsData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadCars();
  }, []);

  const addCar = (car) => {
    const newCars = [...cars, car];
    setCars(newCars);
    AsyncStorage.setItem('cars', JSON.stringify(newCars));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Text style={styles.name}>{item.brand} {item.model}</Text>
            <Text style={styles.details}>Año: {item.year}</Text>
            <Text style={styles.details}>Kilometraje: {item.mileage} km</Text>
            <Text style={styles.details}>Precio: {item.price}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddCar', { addCar })}>
        <Text style={styles.buttonText}>Agregar Carro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  carItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // backgroundColor: '#5589FA',
    borderRadius: 8,
    marginBottom: 12,
    borderColor: '#50b070',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#fff',
    color: '#000'
  },
  details: {
    fontSize: 16,
    // color: '#fff',
    color: '#444',
  },
  button: {
    backgroundColor: '#50b070',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CarsScreen;
