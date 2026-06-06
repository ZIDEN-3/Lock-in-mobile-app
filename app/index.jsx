import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ImageBackground, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      className="flex-1 items-center"
    >
      <View className="mt-10">
        <View className="m-3 h-[6] bg-[#1C2431] w-28 rounded-2xl">
          <View className="bg-[#4DA3FF] h-full w-10 rounded-2xl"></View>
        </View>

        <Text className="text-white text-4xl font-semibold">
          What are you working on?
        </Text>
        <Text className="text-[#9AA4B2] text-lg">
          Select the areas you want to improve.
        </Text>
      </View>
      <View className="w-full flex gap-5 flex-row mt-10 justify-around ">
        <View className="gap-5">
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
            <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
              <MaterialIcons name="fitness-center" size={35} color="#9AA4B2" />
            </View>
            <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
              Fitness
            </Text>
          </View>

          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
            <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
              <FontAwesome name="code" size={35} color="#9AA4B2" />
            </View>
            <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
              Code
            </Text>
          </View>

          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
            <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
              <Ionicons name="book" size={35} color="#9AA4B2" />
            </View>
            <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
              Reading
            </Text>
          </View>

          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
            <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
              <Ionicons name="fitness" size={35} color="#9AA4B2" />
            </View>
            <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
              Health
            </Text>
          </View>
        </View>
        <View className="gap-5">
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
            <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
              <Ionicons name="note" size={35} color="#9AA4B2" />
            </View>
            <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
              Health
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
