<template>
  <div class="home-view">
    <HomeSidebar />
    <HomeContent
      v-if="ratings.length > 0"
      title="The Horus Heresy"
      :content="ratings"
    />
  </div>
</template>

<script setup lang="ts">
  import { HomeSidebar, HomeContent } from '@/components'
  import { useRatingsStore } from '@/stores/ratings'
  import { onMounted, onUnmounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  
  const { getRatings } = useRatingsStore()
  const { ratings } = storeToRefs(useRatingsStore())

  onMounted(async () => {
    await getRatings()
  })

  watch(ratings, (newRatings) => {
    console.log('Ratings updated:', newRatings)
  })

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
