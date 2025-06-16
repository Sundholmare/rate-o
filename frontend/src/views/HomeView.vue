<template>
  <div class="home-view">
    <HomeSidebar />
    <HomeContent />
  </div>
</template>

<script setup lang="ts">
import { HomeSidebar, HomeContent } from '@/components'
</script>

<style scoped lang="scss">
.home-view {
  height: calc(100vh - 2rem);
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
}
</style>
