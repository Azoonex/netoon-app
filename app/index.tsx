import PrimaryButton from "@/components/ui/primary-button";
import { MainColorApp, SizeRounded } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import GameScreen from "./game-screen";
export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [validateEnteredNumber, setValidateEnteredNumber] = useState(false);

  function numberInputHandle(enterText: string) {
    setEnteredNumber(enterText);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInputHandle() {
    const enterNumParse = parseInt(enteredNumber);

    if (!enterNumParse || enterNumParse < 1 || enterNumParse > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "default", onPress: resetInput }]
      );
      return;
    }
    setValidateEnteredNumber(true);
  }

  function toggleIsEntered() {
    setValidateEnteredNumber(!validateEnteredNumber);
  }

  return !validateEnteredNumber ? (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "#cede1aff"]}
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
        source={require("@/assets/images/kitchen.webp")}
      >
        <View style={styles.viewContainer}>
          <TextInput
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandle}
            style={styles.inputStyle}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
              <PrimaryButton press={resetInput} title="Reset" />
            </View>
            <View style={styles.buttonInner}>
              <PrimaryButton press={confirmInputHandle} title="Confirm" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  ) : (
    <GameScreen
      toggleIsEntered={toggleIsEntered}
      guessNumUser={enteredNumber}
    />
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    borderWidth: 1,
    borderColor: MainColorApp.primary,
    borderRadius: SizeRounded.rounded_md,
    margin: 8,
    gap: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#697f4dff",
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: MainColorApp.yellow,
    borderRadius: SizeRounded.btn_md,
    width: 80,
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
  buttonInner: {
    flex: 1,
  },
});
