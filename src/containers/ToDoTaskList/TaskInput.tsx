import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '@styles/Taskstyles';

export default function TaskInput({ taskText, setTaskText, addTask }: any) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter a task..."
        value={taskText}
        onChangeText={setTaskText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
