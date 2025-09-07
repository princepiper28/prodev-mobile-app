// app/screens/Details.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeft, Heart, Star, Bike, Milk } from "lucide-react-native"; // icons
import { Bean } from "@/components/icons/Bean"; // custom icon if needed

const Details = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Status Bar (time, signal, etc.) */}
      <View className="flex-row justify-between items-center px-4 pt-3">
        <Text className="text-sm font-semibold text-black">9:41</Text>
        <View className="w-6 h-3 bg-[#242424] rounded" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between mt-6 px-6">
          <TouchableOpacity className="w-11 h-11 bg-gray-200 rounded-xl items-center justify-center">
            <ArrowLeft size={24} color="#242424" />
          </TouchableOpacity>
          <Text className="text-base font-semibold text-[#242424]">Detail</Text>
          <TouchableOpacity className="w-11 h-11 bg-gray-200 rounded-xl items-center justify-center">
            <Heart size={24} color="#242424" />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image
          source={require("@/assets/images/coffee.png")}
          className="w-[327px] h-[202px] mx-auto mt-6 rounded-xl"
          resizeMode="cover"
        />

        {/* Product Info */}
        <View className="px-6 mt-6">
          <Text className="text-xl font-semibold text-[#242424]">Caffe Mocha</Text>
          <Text className="text-sm text-gray-400 mt-1">Ice / Hot</Text>

          {/* Rating */}
          <View className="flex-row items-center mt-2">
            <Star size={20} color="#FBBE21" fill="#FBBE21" />
            <Text className="ml-2 text-base font-semibold">4.8 (230)</Text>
          </View>

          {/* Superiority Section */}
          <View className="flex-row gap-3 mt-4">
            <View className="w-11 h-11 bg-[#EDEDED59] rounded-xl items-center justify-center">
              <Bike size={24} color="#242424" />
            </View>
            <View className="w-11 h-11 bg-[#EDEDED59] rounded-xl items-center justify-center">
              <Bean size={20} color="#242424" />
            </View>
            <View className="w-11 h-11 bg-[#EDEDED59] rounded-xl items-center justify-center">
              <Milk size={20} color="#242424" />
            </View>
          </View>
        </View>

        {/* Description */}
        <View className="px-6 mt-6">
          <Text className="text-lg font-semibold text-[#242424]">Description</Text>
          <Text className="text-sm text-gray-500 mt-2">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso
            coffee and 85ml of fresh milk... <Text className="font-semibold">Read More</Text>
          </Text>
        </View>

        {/* Size Options */}
        <View className="px-6 mt-6">
          <Text className="text-lg font-semibold text-[#242424]">Size</Text>
          <View className="flex-row gap-3 mt-3">
            <TouchableOpacity className="flex-1 h-11 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="text-sm text-[#242424]">S</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-11 border border-[#C67C4E] bg-[#F9F2ED] rounded-xl items-center justify-center">
              <Text className="text-sm text-[#242424]">M</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-11 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="text-sm text-[#242424]">L</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="w-full h-[118px] bg-white rounded-t-2xl px-6 py-4 flex-row items-center justify-between">
        <View>
          <Text className="text-sm text-gray-400">Price</Text>
          <Text className="text-lg font-semibold text-[#242424]">$ 4.53</Text>
        </View>
        <TouchableOpacity className="w-[217px] h-14 bg-[#C67C4E] rounded-2xl items-center justify-center">
          <Text className="text-white text-base font-semibold">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
