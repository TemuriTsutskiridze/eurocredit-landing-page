<script setup>
const { setLocale, locale } = useI18n();

const switchLanguage = () => {
  setLocale(locale.value === "en" ? "ka" : "en");
  console.log(locale.value);
};
</script>

<template>
  <div
    class="flex items-center justify-between py-6 px-10 tablet:px-20 laptop:px-28 max-w-[1500px] mx-auto"
  >
    <div class="flex items-center gap-8">
      <IconsLogo class="hidden laptop:block cursor-pointer" />
      <div class="w-[1px] h-12 bg-[#E2E4E9] hidden laptop:block"></div>
      <div class="flex items-center gap-[6px]">
        <IconsPhone />
        <p class="text-[#20232D] text-sm font-medium">+995 555 62 44 21</p>
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div
        class="flex items-center gap-[6px] cursor-pointer"
        @click="switchLanguage"
      >
        <p class="font-ABeeZee">
          {{ $t("topBar.lang") }}
        </p>
        <NuxtImg src="/icons/Georgia.png" width="20" height="20" />
      </div>
      <div class="flex items-center gap-2">
        <IconsUser class="cursor-pointer" />
        <ButtonsLoan
          :text="$t('topBar.require')"
          padding="px-[18px] py-[14px]"
          borderRadius="rounded-[50px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
