import { Text, TouchableOpacity, View, Image } from 'react-native';


import { styles } from "./styles";

export function Task() {

  return(
    <View style={styles.container}>
      <View style={styles.completedButtonContainer}>
        <TouchableOpacity 
          style={styles.completedButton}
        /> 
      </View>
      
      <View style={styles.taskContainer}>
        <Text style={styles.task}>
          adjkalsdj  lkdjalk alkd
           alskdjal  adlkja asdlka ladja l alsdja 
           ouat pouarba yup 
        </Text>
      </View>

      <View style={styles.deleteTaskContainer}>
        <TouchableOpacity>
          <Image 
            source={require('../../assets/Vector.png')}
          /> 
        </TouchableOpacity>
      </View>
    </View>
  )
}