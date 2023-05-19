<template>
  <div class="container mx-auto">
    <navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import navbar from "../src/components/navbar.vue";
</script>

<style lang="scss" scoped></style>
