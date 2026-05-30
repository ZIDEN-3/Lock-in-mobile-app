import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.content}>
        <Ionicons name="shield-checkmark" size={35} color="#4DA3FF" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    display: "flex",

    width: 80,
    backgroundColor: "#121821",
    marginTop: 200,
    borderWidth: 4,
    borderColor: "#1E2530",
    padding: 10,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
