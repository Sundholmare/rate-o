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
      <p><span class="bold">Author:</span> {{ author }}</p>
      <p><span class="bold">Rating:</span> {{ rating }}</p>
      <p><span class="bold">Short description:</span> {{ description }}</p>
      <p><span class="bold">Review:</span> {{ review }}</p>
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
      flex: 1;
      gap: 0.75rem;
      padding-right: 1rem;

      .bold {
        font-weight: 600;
      }

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
