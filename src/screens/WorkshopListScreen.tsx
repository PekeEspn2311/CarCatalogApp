// src/screens/WorkshopListScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const workshops = [
  { id: '1', name: 'Taller Mecánico A', location: 'Calle 123, Ciudad' },
  { id: '2', name: 'Taller Mecánico B', location: 'Avenida 456, Ciudad' },
  { id: '3', name: 'Taller Mecánico C', location: 'Boulevard 789, Ciudad' },
];

const WorkshopListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={workshops}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.workshopItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  workshopItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
});

export default WorkshopListScreen;
