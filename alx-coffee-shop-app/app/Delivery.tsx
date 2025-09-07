// Delivery.jsx
import { ArrowLeft, Heart, Bike, Phone } from "lucide-react";

export default function Delivery() {
  return (
    <div className="p-6 bg-white min-h-screen font-sora">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-[327px] h-[44px] mb-6">
        <button className="w-11 h-11 rounded-xl bg-[#EDEDED] flex items-center justify-center">
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="font-semibold text-lg">Delivery Info</h1>
        <button className="w-11 h-11 rounded-xl bg-[#EDEDED] flex items-center justify-center">
          <Heart className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Route / Map Placeholder */}
      <div className="flex justify-center items-center my-10">
        <div className="w-[170px] h-[142px] border-4 border-[#C67C4E] rounded-xl flex items-center justify-center">
          <Bike className="w-10 h-10 text-[#C67C4E]" />
        </div>
      </div>

      {/* Status Card */}
      <div className="w-[327px] rounded-xl border border-[#E3E3E3] p-4 mb-6">
        <div className="mb-2">
          <p className="text-base font-semibold text-[#242424]">10 minutes left</p>
          <p className="text-xs text-[#242424]">Delivery to Jl. Kpg Sutoyo</p>
        </div>
        {/* Progress Bars */}
        <div className="flex gap-1">
          <div className="w-[71px] h-1 rounded-full bg-[#36C07E]" />
          <div className="w-[71px] h-1 rounded-full bg-[#36C07E]" />
          <div className="w-[71px] h-1 rounded-full bg-[#E3E3E3]" />
        </div>
      </div>

      {/* Info Card */}
      <div className="w-[327px] rounded-xl border border-[#E3E3E3] p-4 mb-6 flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#EDEDED] flex items-center justify-center">
          <Bike className="w-6 h-6 text-[#C67C4E]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#242424]">Delivered your order</p>
          <p className="text-xs text-[#A2A2A2]">
            We will deliver your goods to you in the shortest possible time.
          </p>
        </div>
      </div>

      {/* Driver Card */}
      <div className="w-[327px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Profile */}
          <div className="w-14 h-14 rounded-xl bg-[#EDEDED] flex items-center justify-center">
            <img
              src="https://via.placeholder.com/56"
              alt="Driver"
              className="w-14 h-14 rounded-xl object-cover"
            />
          </div>
          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-[#242424]">Brooklyn Simmons</p>
            <p className="text-xs text-gray-500">Personal Courier</p>
          </div>
        </div>
        {/* Call Button */}
        <button className="w-11 h-11 rounded-xl border border-[#E3E3E3] flex items-center justify-center">
          <Phone className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
}
