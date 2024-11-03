<script setup lang="ts">
const navigation: { name: string; link: string }[] = [
  {
    name: "ავტო სესხი",
    link: "/auto-loan",
  },
  {
    name: "ბიზნეს სესხი",
    link: "/business-loan",
  },
  {
    name: "თვითდასაქმებულთათვის",
    link: "/self-employed",
  },
  {
    name: "ჩვენს შესახებ",
    link: "/about-us",
  },
  {
    name: "ბლოგი",
    link: "/blog",
  },
  {
    name: "კონტაქტი",
    link: "/contact",
  },
];
</script>

<template>
  <nav class="py-4 px-6 tablet:px-20 laptop:px-28 mx-auto w-fit">
    <ul class="flex items-center justify-center gap-x-12 gap-y-5 flex-wrap">
      <li v-for="navObj in navigation">
        <NuxtLink
          :to="navObj.link"
          class="text-[#20232D] text-sm font-medium"
          >{{ navObj.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
