import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '@styles/Taskstyles';

export default function TaskFilter({ filter, setFilter }: any) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <View style={styles.filterContainer}>
      {filters.map(type => (
        <TouchableOpacity
          key={type}
          style={[styles.filterButton, filter === type && styles.activeFilterButton]}
          onPress={() => setFilter(type)}
        >
          <Text style={[styles.filterText, filter === type && styles.activeFilterText]}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
