<template>
  <div class="home-view">
    <HomeSidebar />
    <HomeContent
      title="The Horus Heresy"
      :content="content"
    />
  </div>
</template>

<script setup lang="ts">
  import { HomeSidebar, HomeContent } from '@/components'
  import { useRatingsStore } from '@/stores/ratings'
  const { ratings, getRatings } = useRatingsStore()
  import { onMounted, onUnmounted, computed } from 'vue'

  const content = computed(() => ratings[0] || {
    category: '',
    owner: '',
    title: '',
    attributes: {}
  })

  onMounted(async () => {
    await getRatings()
  })

  onUnmounted(() => {
    console.log('HomeView unmounted')
    useRatingsStore().$reset()
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
