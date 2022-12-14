import { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from "./styles";

type Props = {
  task: string;
  onRemove: () => void;
  onComplete: () => void;
}

export function Task({ task, onRemove, onComplete }: Props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCompleteTask() {
    setIsCompleted(true); 
    onComplete();
  }

  
  return(
    <View style={styles.container}>
      <View style={styles.completedButtonContainer}>
        <TouchableOpacity 
          style={styles.completedButton}
          onPress={handleCompleteTask}
          disabled={isCompleted}
        >
        {isCompleted
          ? <View style={styles.completeCompleted} />
          : <></>
        }      
        </TouchableOpacity> 
      </View>
      
      <View style={styles.taskContainer}>
        <Text style={isCompleted ? styles.completedTask : styles.task}>
          {task} 
        </Text>
      </View>

      <View style={styles.deleteTaskContainer}>
        <TouchableOpacity
          onPress={onRemove}
        >
          <Image 
            source={require('../../assets/Vector.png')}
          /> 
        </TouchableOpacity>
      </View>
    </View>
  )
}