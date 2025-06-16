<template>
  <div class="home-sidebar"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .home-sidebar {
    display: flex;
    flex-direction: column;
    background: var(--white);
    padding: 1rem;
    border: 1px solid var(--border-color);
    min-width: 15rem;
    max-height: 100%;
    border-radius: 0.5rem;
    box-shadow: var(--bs-100);
  }
</style>
