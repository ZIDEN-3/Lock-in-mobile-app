import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center bg-black">
      <View>
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
            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <MaterialIcons
                  name="fitness-center"
                  size={35}
                  color="#9AA4B2"
                />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Fitness
              </Text>
            </View>

            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <FontAwesome name="code" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Code
              </Text>
            </View>

            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <Ionicons name="book" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Reading
              </Text>
            </View>

            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <Ionicons name="fitness" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Health
              </Text>
            </View>
          </View>
          <View className="gap-5">
            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <FontAwesome name="book" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Study
              </Text>
            </View>
            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <FontAwesome6 name="money-bills" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Business
              </Text>
            </View>
            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <FontAwesome name="star" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide ">
                Self Improvement
              </Text>
            </View>
            <View className="h-36 w-48 bg-[#121821] rounded-3xl border border-[#1E2530] items-start justify-center p-5">
              <View className="h-14 w-14 bg-[#1F2937] border border-[#374151] rounded-full items-center justify-center">
                <FontAwesome name="circle" size={35} color="#9AA4B2" />
              </View>
              <Text className="text-[#eee]  mt-3 font-bold text-xl tracking-wide">
                Creativity
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          className="p-5 font-semibold text-lg py-4 rounded-2xl"
          style={{ backgroundColor: "#4DA3FF", color: "#F9FAFB" }}
        >
          <Text className="text-center text-[#F9FAFB] text-xl font-medium">
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
