<template>
  <div class="ro-rate-item">
    <div class="item-cover">
      <img
        src="../assets/images/fear-to-tread.jpg"
        alt=""
      />
    </div>
    <div class="item-info">
      <h3>Fear to Tread</h3>
      <p>Author: {{ author }}</p>
      <p>Rating: {{ rating }}</p>
      <p>Short description: {{ description }}</p>
      <p>Review: {{ review }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface RORateItemProps {
    title?: string
    author?: string
    rating?: number
    review?: string
    description?: string
  }

  defineProps<RORateItemProps>()
</script>

<style scoped lang="scss">
  .ro-rate-item {
    display: flex;
    gap: 1rem;
    width: 100%;

    .item-cover {
      width: 196px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 0.5rem;
      }
    }

    .item-info {
      display: flex;
      flex-direction: column;
      flex: 0.5;
      gap: 1rem;

      h3 {
        font-size: 1.25rem;
        margin: 0;
      }

      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }
</style>
