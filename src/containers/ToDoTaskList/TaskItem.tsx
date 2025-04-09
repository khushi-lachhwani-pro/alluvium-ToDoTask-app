import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '@styles/Taskstyles';

export default function TaskItem({ item, tasks, setTasks }: any) {
  const handleToggle = () => {
    const updated = tasks.map((task: any) =>
      task.id === item.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const handleDelete = () => {
    const updated = tasks.filter((task: any) => task.id !== item.id);
    setTasks(updated);
  };

  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={handleToggle}>
        <MaterialCommunityIcons
          name={item.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={24}
          color={item.completed ? '#4caf50' : '#555'}
        />
      </TouchableOpacity>

      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
        {item.text}
      </Text>

      <TouchableOpacity onPress={handleDelete}>
        <MaterialCommunityIcons name="delete-outline" size={24} color="#900" />
      </TouchableOpacity>
    </View>
  );
}
