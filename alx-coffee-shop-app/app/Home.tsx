import React from "react";
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { ArrowDown2, Search, Profile, Filter, Star, Add } from "iconsax-react-native"; // Example: iconsax package

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-[#f9f9f9]">
      {/* Top Gradient Section */}
      <View className="w-[375px] h-[280px] rounded-b-2xl bg-gradient-to-br from-[#111111] to-[#313131] px-6 pt-10">
        {/* Location + Profile */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <Text className="text-[14px] font-semibold text-white">Bilzen, Tanjungbalai</Text>
            <ArrowDown2 size={14} color="white" />
          </View>
          <Profile size={28} color="white" />
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center justify-between mt-8 gap-4">
          {/* Input */}
          <View className="flex-row items-center gap-2 flex-1 bg-[#2A2A2A] px-4 py-3 rounded-xl">
            <Search size={20} color="#A2A2A2" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#A2A2A2"
              className="flex-1 text-white text-[14px]"
            />
          </View>
          {/* Filter Button */}
          <TouchableOpacity className="w-[52px] h-[52px] bg-[#C67C4E] rounded-xl items-center justify-center">
            <Filter size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Promo Banner */}
      <View className="mt-6 px-6">
        <View className="w-[327px] h-[140px] bg-[#D8D8D8] rounded-2xl p-4 justify-center">
          <Text className="text-white font-semibold">Special Promo</Text>
        </View>
      </View>

      {/* Categories */}
      <View className="mt-6 px-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-3">
          <TouchableOpacity className="bg-[#C67C4E] px-3 py-1 rounded-md">
            <Text className="text-white">All Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#EDEDED59] px-3 py-1 rounded-md">
            <Text className="text-black">Machiato</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#EDEDED59] px-3 py-1 rounded-md">
            <Text className="text-black">Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#EDEDED59] px-3 py-1 rounded-md">
            <Text className="text-black">Americano</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Product Grid */}
      <View className="mt-6 px-6 flex-row flex-wrap justify-between">
        {[1, 2].map((item) => (
          <View key={item} className="w-[156px] h-[238px] bg-white rounded-2xl p-2 mb-4 shadow">
            {/* Image + Rating */}
            <View className="w-[140px] h-[128px] relative">
              <Image
                source={{ uri: "https://via.placeholder.com/140x128" }}
                className="w-full h-full rounded-xl"
              />
              <View className="absolute top-0 right-0 bg-gradient-to-br from-[#1111114D] to-[#3131314D] px-2 py-1 rounded-tr-xl rounded-bl-2xl flex-row items-center gap-1">
                <Star size={14} color="yellow" />
                <Text className="text-white text-xs">4.5</Text>
              </View>
            </View>

            {/* Details */}
            <View className="mt-2">
              <Text className="text-[16px] font-semibold text-[#242424]">Caffe Mocha</Text>
              <Text className="text-[12px] text-[#A2A2A2]">Deep Foam</Text>
            </View>

            {/* Price + Add */}
            <View className="flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-semibold text-black">$ 4.53</Text>
              <TouchableOpacity className="w-8 h-8 bg-[#C67C4E] rounded-lg items-center justify-center">
                <Add size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
