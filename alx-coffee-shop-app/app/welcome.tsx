// app/welcome.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      {/* Coffee Image */}
      <Image
        source={require("../assets/images/coffee-cup.png")}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      {/* Shadow Gradient Overlay */}
      <LinearGradient
        colors={["rgba(5,5,5,0)", "#050505"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.shadowContainer}
      >
        {/* Content inside shadow */}
        <View className="items-center px-6">
          {/* Title */}
          <Text className="text-center text-3xl leading-snug mb-4 text-white font-sora-semibold">
            Fall in Love with Coffee in Blissful Delight!
          </Text>

          {/* Subtitle */}
          <Text className="text-center text-sm leading-relaxed mb-8 text-[#A2A2A2] font-sora-regular">
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>

          {/* Button */}
          <TouchableOpacity
            className="w-full max-w-[327px] bg-[#C67C4E] py-4 rounded-2xl items-center"
            onPress={() => router.push("/home")}
          >
            <Text className="text-white text-base font-sora-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 360, // matches your spec
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
});
