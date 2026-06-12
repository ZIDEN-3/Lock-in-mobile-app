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
        <Stack.Screen name="on-boarding" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
