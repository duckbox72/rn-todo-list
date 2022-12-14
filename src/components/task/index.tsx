import { Text, TouchableOpacity, View, Image } from 'react-native';


import { styles } from "./styles";

type Props = {
  task: string;
  onComplete: () => void;
  onRemove: () => void;
}

export function Task({ task, onComplete, onRemove}: Props) {

  return(
    <View style={styles.container}>
      <View style={styles.completedButtonContainer}>
        <TouchableOpacity 
          style={styles.completedButton}
        >
          <View style={styles.completeCompleted} />
        </TouchableOpacity> 
      </View>
      
      <View style={styles.taskContainer}>
        <Text style={styles.task}>
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