import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import theme from '../../global/styles/theme';
import { Task } from '../../components/task';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<string[]>([]);
  const [task, setTask] = useState('');

  function handleAddTask() {
    if(task === '') {
      return Alert.alert('Please add a task!');
    }

    if(tasks.includes(task)) {
      return Alert.alert('Task already exists!');
    }

    setTasks(prevState => [...prevState, task]);
  };

  function handleCompleteTask (item: string) {
    setTasks(prevState => prevState.filter(task => task !== item));
    setIsCompleted(prevState => [...prevState, task]);
  };

  function handleRemoveTask(item: string) {
    Alert.alert("Remove Task", `Remove ${item} from ToDo?`, [
      {
        text: 'Yes',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task !== item));
          setIsCompleted(prevState => prevState.filter(task => task !== item));
        }
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  };

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
          onPress={handleAddTask}
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
              {tasks.length + isCompleted.length}
            </Text>
          </View>
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterCompletedText}>
            Completed
          </Text>
          <View style={styles.counterValueContainer}>
            <Text style={styles.counterValueText}>
              {isCompleted.length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList 
        data={[...tasks, ...isCompleted]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task 
            key={item}
            onRemove={() => handleRemoveTask(item)}
            onComplete={() => handleCompleteTask(item)}
            task={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyComponentContainer}>
            <Image 
              style={styles.listEmptyImage}
              source={require('../../assets/Clipboard.png')}
            />
            <Text style={styles.listEmptyTextTop}>
              You still don't have any tasks added
            </Text>
            <Text style={styles.listEmptyTextBottom}>
              Create tasks and organize your todos
            </Text>
          </View>
        )}
      />
    </View>

  );
}

