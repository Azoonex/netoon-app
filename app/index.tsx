import Loading from "@/components/layout/loading";

import { useEffect, useState } from "react";
import { Text, View } from "react-native";
export default function StartGameScreen() {
  const [validateEnteredNumber, setValidateEnteredNumber] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValidateEnteredNumber(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return !validateEnteredNumber ? (
    <Loading />
  ) : (
    <View>
      <Text>hello world</Text>
    </View>
  );
}
