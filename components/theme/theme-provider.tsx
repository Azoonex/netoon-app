import { Text, StyleSheet, View, useColorScheme } from 'react-native';

import { Colors } from '.';
import React from 'react';

export default function App({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  const themeStyle =
    colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles., themeStyle]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: Colors.light.primary,
  },
  darkContainer: {
    backgroundColor: Colors.darks.primary,
  },
  lightThemeText: {
    color: Colors.light.text,
  },
  darkThemeText: {
    color: Colors.darks.text,
  },
});
