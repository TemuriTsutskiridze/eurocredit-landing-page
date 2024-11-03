<script setup>
import { ref } from "vue";

const sliderValue = ref(11500);
</script>

<template>
  <div class="mt-8 w-[456px] flex flex-col gap-[9px] relative">
    <div class="flex items-center justify-between">
      <p class="text-[#20232D] text-sm font-medium">რა თანხის სესხება გსურთ</p>
      <p class="text-[#525866] text-xs">მაქს: 24 000₾</p>
    </div>

    <div class="relative">
      <input
        type="range"
        min="1000"
        max="24000"
        step="100"
        v-model="sliderValue"
        class="w-full rounded-[96px] appearance-none h-[17px] outline-none slider"
        :style="{
          background: `linear-gradient(
            to right,
            #1A3364 0%,
            #1A3364 ${((sliderValue - 1000) / (24000 - 1000)) * 100}%,
            #E2E4E9 ${((sliderValue - 1000) / (24000 - 1000)) * 100}%,
            #E2E4E9 100%
          )`,
        }"
      />
      <div
        class="absolute -translate-x-1/2 bg-white border border-[#E2E4E9] rounded-[4px] shadow-tooltip p-1 text-center text-xs text-[#0A0D14] font-ABeeZee tooltip"
        :style="{
          left: `${((sliderValue - 1000) / (24000 - 1000)) * 100}%`,
          top: '35px',
        }"
      >
        {{ sliderValue }}₾
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  background: radial-gradient(circle at 50%, #1a3364 20%, #fff 20%);
  box-shadow: 0px -3px 3px rgba(55, 93, 251, 0.16) inset,
    0px 0px 6px rgba(27, 28, 29, 0.06);
  position: relative;
  transition: 0.3s;
}

.slider::-webkit-slider-thumb:active {
  transform: scale(1.3);
}

.tooltip::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-33px);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #e2e4e9;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-31px);
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #fff;
}
</style>
