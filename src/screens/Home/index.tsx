import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

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
          <Image 
            style={styles.titleImage}
            source={require('../../assets/Logo.png')}
          />
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
          <Text style={styles.buttonPlus}>
            <Image 
             source={require('../../assets/plus.png')}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gaugesContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterCreatedText}>
            Created
          </Text>
          <View style={styles.counterValueContainer}>
            <Text style={styles.counterValueText}>
              0
            </Text>
          </View>
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterConcludedText}>
            Concluded
          </Text>
          <View style={styles.counterValueContainer}>
            <Text style={styles.counterValueText}>
              0
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.listEmptyComponentContainer}>
          <Image 
            style={styles.listEmptyImage}
            source={require('../../assets/Clipboard.png')}
          />
          <Text style={styles.listEmptyTextTop}>
            You still don't have any tasks added
          </Text>
          <Text style={styles.listEmptyTextBottom}>
            Create tasks and organize your to do
          </Text>
      </View>
    </View>
  );
}2

