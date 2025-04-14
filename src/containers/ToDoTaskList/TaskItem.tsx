import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '@styles/Taskstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Swipeable } from 'react-native-gesture-handler';

export default function TaskItem({ item, tasks, setTasks, onEdit }:any) {
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

  const renderRightActions = () => (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
      <FontAwesome name="trash" size={24} color="white" />
    </TouchableOpacity>
  );

  const renderLeftActions = () => (
    <TouchableOpacity onPress={handleToggle} style={styles.completeButton}>
      <FontAwesome name="check" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
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
        <TouchableOpacity onPress={() => onEdit(item.id)}>
          <MaterialCommunityIcons name="pencil" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </Swipeable>

  );
}
