import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { ArrowLeft2, ArrowRight2, Discount, Wallet2, ArrowDown2, MinusCircle, PlusCircle } from "iconsax-react-native";

export default function Order() {
  return (
    <View className="flex-1 bg-white px-6 pt-8">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between h-11 w-[188px]">
        <TouchableOpacity className="w-11 h-11 rounded-xl bg-[#242424] items-center justify-center">
          <ArrowLeft2 size="24" color="white" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#242424]">Order</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-6"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Delivery / Pickup Switch */}
        <View className="flex-row justify-between w-[327px] bg-[#EDEDED] rounded-xl p-1">
          <TouchableOpacity className="flex-1 bg-[#C67C4E] rounded-lg py-2 px-6 items-center">
            <Text className="text-white text-base font-semibold">Deliver</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#EDEDED] rounded-lg py-2 px-6 items-center">
            <Text className="text-[#242424] text-base">Pick Up</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Address */}
        <View className="mt-6 gap-4">
          <Text className="text-lg font-semibold text-[#242424]">Delivery Address</Text>
          <View className="gap-2">
            <Text className="text-sm font-semibold text-[#313131]">Jl. Kpg Sutoyo</Text>
            <Text className="text-xs text-[#A2A2A2]">
              Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
            </Text>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-row items-center gap-2 border border-[#A2A2A2] rounded-full px-3 py-1.5">
              <Text className="text-xs text-[#313131]">Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2 border border-[#A2A2A2] rounded-full px-3 py-1.5">
              <Text className="text-xs text-[#313131]">Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Checkout Product */}
        <View className="mt-6 flex-row justify-between items-center">
          <View className="flex-row items-center gap-4">
            <Image
              source={require("../assets/coffee1.png")}
              className="w-14 h-14 rounded-lg"
            />
            <View>
              <Text className="text-base font-semibold text-[#242424]">
                Caffe Mocha
              </Text>
              <Text className="text-xs text-[#A2A2A2]">Deep Foam</Text>
            </View>
          </View>

          {/* Quantity */}
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-6 h-6 items-center justify-center rounded-full border border-[#F9F2ED] bg-white">
              <MinusCircle size="20" color="#2A2A2A" />
            </TouchableOpacity>
            <Text className="text-sm font-semibold text-[#2A2A2A]">1</Text>
            <TouchableOpacity className="w-6 h-6 items-center justify-center rounded-full border border-[#F9F2ED] bg-white">
              <PlusCircle size="20" color="#2A2A2A" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Discount */}
        <View className="mt-6 flex-row justify-between items-center border border-[#EDEDED] rounded-xl p-4">
          <View className="flex-row items-center gap-2">
            <Discount size="20" color="#313131" />
            <Text className="text-sm font-semibold text-[#313131]">
              1 Discount is Applied
            </Text>
          </View>
          <ArrowRight2 size="20" color="#313131" />
        </View>

        {/* Payment Summary */}
        <View className="mt-6 gap-4">
          <Text className="text-lg font-semibold text-[#242424]">
            Payment Summary
          </Text>

          <View className="flex-row justify-between">
            <Text className="text-sm text-[#313131]">Price</Text>
            <Text className="text-sm font-semibold text-[#242424]">$ 4.53</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-sm text-[#313131]">Delivery Fee</Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-sm line-through text-[#2A2A2A]">$ 2.0</Text>
              <Text className="text-sm font-semibold text-[#242424]">$ 1.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Payment Section */}
      <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6">
        {/* Wallet Row */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center gap-4">
            <Wallet2 size="20" color="#C67C4E" />
            <View>
              <Text className="text-sm font-semibold text-[#242424]">
                Cash/Wallet
              </Text>
              <Text className="text-xs font-semibold text-[#C67C4E]">$ 5.53</Text>
            </View>
          </View>
          <ArrowDown2 size="20" color="#313131" />
        </View>

        {/* Pay Button */}
        <TouchableOpacity className="w-full bg-[#C67C4E] rounded-xl py-4 items-center">
          <Text className="text-lg font-semibold text-white">Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
