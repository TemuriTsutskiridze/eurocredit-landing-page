<script setup lang="ts"></script>

<template>
  <section
    class="flex flex-col items-center gap-10 desktop:flex-row desktop:gap-[76px]"
  >
    <div>
      <h1
        class="text-[#161922] text-2xl tablet:text-3xl laptop:text-4xl desktop:text-[42px] desktop:leading-[54px] font-bold"
      >
        {{ $t("hero.title") }}
      </h1>
      <p class="text-[#20232D] text-lg mt-4 font-ABeeZee">
        {{ $t("hero.description") }}
      </p>
      <ButtonsLoan
        :text="$t('hero.require')"
        padding="px-[26px] py-[18px]"
        border-radius="rounded-[88px]"
        class="mt-6"
      />

      <div class="flex flex-col gap-4 mt-[43px]">
        <div
          v-for="index in Array.from({ length: 4 }, (_, i) => i)"
          class="flex items-center gap-3"
        >
          <IconsCheck />
          <p>{{ $t(`hero.benefits[${index}]`) }}</p>
        </div>
      </div>
    </div>
    <NuxtImg src="/images/hero.png" width="548" />
  </section>
</template>

<style scoped></style>
