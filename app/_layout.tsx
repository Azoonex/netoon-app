import { Stack } from "expo-router";
import "react-native-reanimated";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="game-screen" options={{ title: "Game-screen" }} />
    </Stack>
  );
}
