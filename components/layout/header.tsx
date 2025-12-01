import { View, Text } from 'react-native';
import React from 'react';

export default function header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0000f',
  },
};
