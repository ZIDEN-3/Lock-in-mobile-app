import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "react-native-reanimated";
import "../global.css";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <StatusBar style="auto" />
      </Stack>
    </SafeAreaProvider>
  );
}
