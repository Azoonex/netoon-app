import { MainColorApp, SizeRounded } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  press?: () => void;
};

export default function PrimaryButton(props: ButtonProps) {
  const { title, press } = props;
  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={press}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: MainColorApp.primary,
    borderRadius: SizeRounded.btn_md,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
