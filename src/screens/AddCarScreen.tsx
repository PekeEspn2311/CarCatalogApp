import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddCarScreen = ({ navigation }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCar = () => {
    console.log('Car added:', { brand, model, year, mileage, price });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Carro</Text>
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={model}
        onChangeText={setModel}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Año"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Kilometraje"
        value={mileage}
        onChangeText={setMileage}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        placeholderTextColor="#666"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCar}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddCarScreen;
