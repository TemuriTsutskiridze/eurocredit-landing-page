<script setup></script>

<template>
  <section class="mt-[132px] flex flex-col items-center">
    <h2
      class="text-[#161922] text-4xl font-bold tracking-[-0.216px] text-center"
    >
      {{ $t("loanApplication.title") }}
    </h2>
    <p class="text-[#525866] text-base leading-7 mt-4 font-ABeeZee">
      {{ $t("loanApplication.description") }}
    </p>

    <LoanSlider />

    <ButtonsLoan
      :text="$t('loanApplication.take')"
      padding="px-[26px] py-[18px]"
      border-radius="rounded-[88px]"
      class="mt-10 w-full max-w-[456px]"
      style="display: block"
    />
  </section>
</template>

<style scoped></style>
