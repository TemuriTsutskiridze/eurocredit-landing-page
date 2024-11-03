<script setup>
const props = defineProps({
  text: String,
  padding: String,
  borderRadius: String,
});
</script>

<template>
  <button
    :class="[
      'hidden',
      'tablet:block',
      'text-white',
      'text-sm',
      'font-medium',
      'bg-[#1A3364]',
      borderRadius,
      padding,
    ]"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
