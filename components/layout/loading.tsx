import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Loading() {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,6)", "#000"]}
      style={{
        flex: 1,
        borderRadius: 12,
      }}
      end={{ x: 0.1, y: 0.8 }}
    >
      <ImageBackground
        imageStyle={{
          opacity: 0.8,
        }}
        style={{
          flex: 1,
        }}
        resizeMode="cover"
        source={require("@/assets/images/bg-home.jpg")}
      >
        <SafeAreaProvider style={styles.viewContainer}>
          <View style={styles.containerSpinner}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.textLoading}>Loading...</Text>
          </View>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    margin: 8,
    gap: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerSpinner: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
  },
  textLoading: {
    color: "white",
  },
});
