<script setup lang="ts">
const benefits: string[] = [
  "სპეციალურად შენ საქმიანობაზე მორგებული პირობები!",
  "სესხის მიღების სწრაფი და მარტივი პროცესი!",
  "მხოლოდ ავტომობილის უზრუნველყოფით!",
  "ნებიესმიერი საკრედიტო ისტორიით!",
];
</script>

<template>
  <section
    class="flex flex-col items-center gap-10 desktop:flex-row desktop:gap-[76px]"
  >
    <div>
      <h1
        class="text-[#161922] text-2xl tablet:text-3xl laptop:text-4xl desktop:text-[42px] desktop:leading-[54px] font-bold"
      >
        სესხი <br />
        თვითდასაქმებულთათვის
      </h1>
      <p class="text-[#20232D] text-lg mt-4">
        თუ ხარ თვითდასაქმებული და საქმიანობის განსავითარებლად დამატებითი
        ფინანსები გჭირდება, ჩვენ გთავაზობთ სპეციალურად შენს საჭიროებებზე
        მორგებულ სესხს, განსაკუთრებული და მოსახერხებელი პირობებით.
      </p>
      <ButtonsLoan
        text="მოითხოვე სესხი"
        padding="px-[26px] py-[18px]"
        border-radius="rounded-[88px]"
        class="mt-6"
      />

      <div class="flex flex-col gap-4 mt-[43px]">
        <div v-for="benefit in benefits" class="flex items-center gap-3">
          <IconsCheck />
          <p>{{ benefit }}</p>
        </div>
      </div>
    </div>
    <NuxtImg src="/images/hero.png" />
  </section>
</template>

<style scoped></style>
