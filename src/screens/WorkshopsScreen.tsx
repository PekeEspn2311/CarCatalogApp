import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const workshops = [
  { id: '1', name: 'Taller Mecánico A', location: 'Calle 123, Ciudad' },
  { id: '2', name: 'Taller Mecánico B', location: 'Avenida 456, Ciudad' },
  { id: '3', name: 'Taller Mecánico C', location: 'Boulevard 789, Ciudad' },
];

const WorkshopsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={workshops}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.workshopItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Ubicación: {item.location}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddWorkshop')}>
        <Text style={styles.buttonText}>Agregar Taller</Text>
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
  workshopItem: {
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

export default WorkshopsScreen;
