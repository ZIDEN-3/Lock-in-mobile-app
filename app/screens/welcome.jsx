import { Ionicons } from "@expo/vector-icons";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.content}>
        <Ionicons name="shield-checkmark" size={35} color="#4DA3FF" />
      </View>
      <View style={styles.content_2}>
        <Text className="text-white text-5xl font-bold text-center">
          Build Proff, Not Excuses
        </Text>
        <Text className="text-[#9AA4B2] text-xl text-center ">
          Forge unshakeable discipline through daily consistency. Track your
          progress, build your streak, and prove it to yourself every single
          day.
        </Text>
        <Pressable
          className="w-[95%] p-5 font-semibold text-lg py-4 rounded-2xl"
          style={{ backgroundColor: "#4DA3FF", color: "#F9FAFB" }}
        >
          <Text className="text-center text-[#F9FAFB] text-xl font-medium">
            Get started
          </Text>
        </Pressable>
        <Text className="text-[#9AA4B2]">
          Already have an account?{" "}
          <Text className="text-white font-semibold"> Log in</Text>
        </Text>
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
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    backgroundColor: "#121821",
    marginTop: 200,
    borderWidth: 2,
    borderColor: "#1E2530",
    padding: 5,
    borderRadius: 30,
  },

  content_2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
    marginBottom: 120,
    padding: 30,
    gap: 20,
  },
});
