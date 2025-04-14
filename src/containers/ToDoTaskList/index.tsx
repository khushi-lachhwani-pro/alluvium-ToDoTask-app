import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    Text,
    TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EmptyDataScreen from '@components/EmptyDataScreen';
import { styles } from '@styles/Taskstyles';
import TaskInput from './TaskInput';
import TaskFilter from './TaskFilter';
import TaskItem from './TaskItem';

export default function Tasklist() {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

    const TASKS_KEY = '@tasks';

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem(TASKS_KEY);
                if (storedTasks) {
                    setTasks(JSON.parse(storedTasks));
                }
            } catch (e) {
                console.error('Failed to load tasks', e);
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

    useEffect(() => {
        const saveTasks = async () => {
            try {
                await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
            } catch (e) {
                console.error('Failed to save tasks', e);
            }
        };
        if (!loading) saveTasks();
    }, [tasks]);

    const addTask = () => {
        const trimmedText = taskText.trim();
        if (!trimmedText) return;

        if (isEditing && editingTaskId) {
            setTasks(prev =>
                prev.map(task =>
                    task.id === editingTaskId ? { ...task, text: trimmedText } : task
                )
            );
            setIsEditing(false);
            setEditingTaskId(null);
        } else {
            setTasks(prev => [
                ...prev,
                { id: Date.now().toString(), text: trimmedText, completed: false },
            ]);
        }

        setTaskText('');
    };

    const startEditingTask = (taskId: string) => {
        const taskToEdit = tasks.find(t => t.id === taskId);
        if (taskToEdit) {
            setTaskText(taskToEdit.text);
            setEditingTaskId(taskId);
            setIsEditing(true);
        }
    };

    const filteredTasks = tasks.filter((task: any) => {
        const matchesFilter =
            filter === 'all'
                ? true
                : filter === 'completed'
                    ? task.completed
                    : !task.completed;

        const matchesSearch = task?.text?.toLowerCase().includes(searchQuery?.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4caf50" />
                <Text style={{ marginTop: 10 }}>Loading tasks...</Text>
            </SafeAreaView>
        );
    }



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <TaskInput
                    taskText={taskText}
                    setTaskText={setTaskText}
                    addTask={addTask}
                    isEditing={isEditing}
                />
                <TaskFilter filter={filter} setFilter={setFilter} />

                <View style={styles.searchContainer}>
                    <MaterialCommunityIcons name="magnify" size={20} color="#555" style={{ marginRight: 8 }} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search tasks..."
                        placeholderTextColor="#aaa"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                {filteredTasks.length === 0 ? (
                    <EmptyDataScreen />
                ) : (
                    <>
                        <FlatList
                            data={filteredTasks}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => (
                                <TaskItem
                                    item={item}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    onEdit={startEditingTask}
                                />)}
                            contentContainerStyle={styles.taskList}
                        />
                    </>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
