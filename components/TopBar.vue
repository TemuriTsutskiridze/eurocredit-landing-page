<script setup></script>

<template>
  <div
    class="flex items-center justify-between py-6 px-10 tablet:px-20 laptop:px-28 max-w-[1500px] mx-auto"
  >
    <div class="flex items-center gap-8">
      <IconsLogo class="hidden laptop:block" />
      <div class="w-[1px] h-12 bg-[#E2E4E9] hidden laptop:block"></div>
      <div class="flex items-center gap-[6px]">
        <IconsPhone />
        <p class="text-[#20232D] text-sm font-medium">+995 555 62 44 21</p>
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div class="flex items-center gap-[6px]">
        <p>ქარ</p>
        <IconsGeorgia class="cursor-pointer" />
      </div>
      <div class="flex items-center gap-2">
        <IconsUser class="cursor-pointer" />
        <button
          class="hidden tablet:block text-white text-sm font-medium bg-[#1A3364] rounded-[50px] px-[18px] py-[14px]"
        >
          სესხის მოთხოვნა
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
