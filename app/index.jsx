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
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
        </View>
        <View className="gap-5">
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
          <View className="h-40 w-48 bg-[#121821] rounded-3xl border border-[#1E2530]"></View>
        </View>
      </View>
    </ImageBackground>
  );
}
