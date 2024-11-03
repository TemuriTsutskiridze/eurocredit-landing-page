<script setup></script>

<template>
  <div>
    <header>
      <Offer />
      <TopBar />
      <Navigation />
    </header>

    <main
      class="mx-auto max-w-[1400px] px-12 tablet:px-16 laptop:px-20 desktop:px-28 mt-[40px]"
    >
      <slot />
    </main>
  </div>
</template>

<style lang=""></style>
