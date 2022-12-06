import React from 'react';
import { View, Text, StatusBar} from 'react-native';

import { styles } from './style';

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

