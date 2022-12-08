import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';

import theme from '../../global/styles/theme';

export function Home() {
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
        //onChangeText={setTask}
        //value={task}
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

      <Text style={{color: 'red'}}>ToDo List App</Text>
    </View>
  );
}

