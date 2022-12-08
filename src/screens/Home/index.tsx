import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import theme from '../../global/styles/theme';
import { Task } from '../../components/task';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.titleBackground}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ToDo App</Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
        style={styles.textInput}
        placeholder="Add a new task"
        placeholderTextColor={theme.colors.gray300}
        onChangeText={setTask}
        value={task}
        />

        <TouchableOpacity 
          style={styles.button}
          //onPress={handleTaskAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.countersContainer}>
        <Text style={styles.counterCreated}>
          Created 0
        </Text>
        <Text style={styles.counterConcluded}>
          Concluded 0
        </Text>
      </View>

    </View>
  );
}

