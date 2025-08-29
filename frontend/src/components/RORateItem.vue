<template>
  <div class="ro-rate-item">
    <div class="item-cover">
      <img
        src="../assets/images/fear-to-tread.jpg"
        alt=""
      />
    </div>
    <div class="item-info">
      <h3>{{ title }}</h3>
      <p><span class="bold">Title: </span>{{ title }}</p>
      <p><span class="bold">Category: </span> {{ category }}</p>
      <p v-for="(key, value) in attributes"><span class="bold">{{ capitalize(value) }}: </span>{{ key }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface RORateItemProps {
    category: String
    owner: String
    title: String
    attributes: Record<string, string | number>
  }

  defineProps<RORateItemProps>()

  const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
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
      justify-content: space-evenly;
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
