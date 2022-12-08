import React from 'react';
import { View, Text, StatusBar} from 'react-native';

import { styles } from './style';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBackground}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ToDo App</Text>
        </View>
      </View>

      <Text style={{color: 'red'}}>ToDo List App</Text>
    </View>
  );
}

