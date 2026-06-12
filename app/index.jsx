import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  useEffect(() => {
    router.replace("/on-boarding/welcome");
  }, []);
  return (
    <View className="flex-1">
      <Text>Hola</Text>
    </View>
  );
}
