<script setup></script>

<template>
  <nav class="py-4 px-6 tablet:px-20 laptop:px-28 mx-auto w-fit">
    <ul class="flex items-center justify-center gap-x-12 gap-y-5 flex-wrap">
      <li v-for="index in Array.from({ length: 6 }, (_, i) => i)" :key="index">
        <NuxtLink
          :to="$t(`navigation[${index}].link`)"
          class="text-[#20232D] text-sm font-medium"
        >
          {{ $t(`navigation[${index}].name`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
